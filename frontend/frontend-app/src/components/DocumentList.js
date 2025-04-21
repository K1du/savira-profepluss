import React, { useEffect, useState } from 'react';

const DocumentList = ({ onDelete }) => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [resumen, setResumen] = useState(null);
  const [resumenDocId, setResumenDocId] = useState(null);
  const [extracto, setExtracto] = useState(null);
  const [test, setTest] = useState(null);
  const [testDocId, setTestDocId] = useState(null);
  const [testUserAnswers, setTestUserAnswers] = useState({});
  const [testFeedback, setTestFeedback] = useState({});
  const token = localStorage.getItem('access_token');

  const fetchDocuments = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://127.0.0.1:8000/api/documentos/', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setDocuments(data);
      } else {
        setError('Error al cargar documentos');
      }
    } catch (err) {
      setError('Error de red');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchDocuments();
    // eslint-disable-next-line
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('¿Seguro que quieres borrar este documento?')) return;
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/documentos/${id}/`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.ok) {
        setDocuments(prev => prev.filter(doc => doc.id !== id));
        if (onDelete) onDelete();
      } else {
        setError('No se pudo borrar el documento');
      }
    } catch (err) {
      setError('Error de red');
    }
  };

  const handleResumen = async (id) => {
    setResumen(null);
    setExtracto(null);
    setResumenDocId(id);
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/documentos/${id}/resumir/`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = await response.json();
      if (response.ok && data.resumen) {
        setResumen(data.resumen);
        setExtracto(data.texto_extraido || null);
      } else {
        setResumen('No se pudo generar resumen.');
        setExtracto(null);
      }
    } catch (err) {
      setResumen('Error al conectar con el servicio IA.');
      setExtracto(null);
    }
  };

  const handleTest = async (id) => {
    setTest(null);
    setTestDocId(id);
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/documento/${id}/test/`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ num_preguntas: 5 })
      });
      const data = await response.json();
      if (response.ok && data.tests) {
        setTest(data.tests);
      } else {
        setTest('No se pudo generar test.');
      }
    } catch (err) {
      setTest('Error al conectar con el servicio IA.');
    }
  };

  const handleTestAnswer = (qIdx, answer) => {
    setTestUserAnswers(prev => ({ ...prev, [qIdx]: answer }));
    if (test && Array.isArray(test) && test[qIdx]) {
      if (answer === test[qIdx].respuesta_correcta) {
        setTestFeedback(prev => ({ ...prev, [qIdx]: { correct: true, explanation: null } }));
      } else {
        setTestFeedback(prev => ({ ...prev, [qIdx]: { correct: false, explanation: test[qIdx].explicacion } }));
      }
    }
  };

  if (loading) return <div>Cargando documentos...</div>;
  if (error) return <div className="error">{error}</div>;
  if (documents.length === 0) return <div>No tienes documentos aún.</div>;

  return (
    <div className="document-list">
      <h3>Mis documentos</h3>
      <ul>
        {documents.map(doc => (
          <li key={doc.id}>
            <a href={`http://127.0.0.1:8000${doc.archivo}`} target="_blank" rel="noopener noreferrer">{doc.nombre}</a>
            {doc.tipo && <span> [{doc.tipo}]</span>}
            <button onClick={() => handleDelete(doc.id)} style={{marginLeft: '1rem'}}>Borrar</button>
            <button onClick={() => handleResumen(doc.id)} style={{marginLeft: '1rem'}}>Resumir</button>
            <button onClick={() => handleTest(doc.id)} style={{marginLeft: '1rem'}}>Test IA</button>
            {resumenDocId === doc.id && resumen && (
              <div className="resumen-box">
                <strong>Resumen IA:</strong>
                <div>{resumen}</div>
                {extracto && <details><summary>Ver texto extraído</summary><pre style={{whiteSpace: 'pre-wrap'}}>{extracto}</pre></details>}
              </div>
            )}
            {testDocId === doc.id && test && (
              <div className="test-box">
                <strong>Test IA (opción múltiple):</strong>
                {Array.isArray(test) ? (
                  <ol>
                    {test.map((preg, idx) => (
                      <li key={idx} style={{marginBottom: '1.2rem'}}>
                        <div><b>{preg.pregunta}</b></div>
                        <ul style={{listStyle: 'none', paddingLeft: 0}}>
                          {preg.opciones.map((op, i) => (
                            <li key={i} style={{marginBottom: '0.4rem'}}>
                              <button
                                style={{
                                  background: testUserAnswers[idx] === op ? (testFeedback[idx]?.correct ? '#c8f7c5' : '#ffd6d6') : '#f4f4f4',
                                  border: '1px solid #ccc',
                                  borderRadius: '5px',
                                  padding: '0.4rem 0.8rem',
                                  cursor: 'pointer',
                                  fontWeight: testUserAnswers[idx] === op ? 'bold' : 'normal',
                                  outline: 'none'
                                }}
                                onClick={() => handleTestAnswer(idx, op)}
                                disabled={testFeedback[idx]?.correct}
                              >
                                {String.fromCharCode(65 + i)}. {op}
                              </button>
                            </li>
                          ))}
                        </ul>
                        {testFeedback[idx] && !testFeedback[idx].correct && (
                          <div style={{color: '#b80000', marginTop: '0.5rem'}}>
                            <b>Incorrecto.</b> Explicación IA: {testFeedback[idx].explanation}
                          </div>
                        )}
                        {testFeedback[idx] && testFeedback[idx].correct && (
                          <div style={{color: '#1a7f2e', marginTop: '0.5rem'}}>
                            <b>¡Correcto!</b>
                          </div>
                        )}
                      </li>
                    ))}
                  </ol>
                ) : <div>{test}</div>}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentList;
