import React, { useState } from 'react';

const DocumentUpload = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [nombre, setNombre] = useState('');
  const [tipo, setTipo] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    const token = localStorage.getItem('access_token');
    if (!file) {
      setError('Selecciona un archivo');
      return;
    }
    const formData = new FormData();
    formData.append('archivo', file);
    formData.append('nombre', nombre || file.name);
    formData.append('tipo', tipo);
    try {
      const response = await fetch('http://127.0.0.1:8000/api/documentos/', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      });
      if (response.ok) {
        setSuccess(true);
        setFile(null);
        setNombre('');
        setTipo('');
        if (onUpload) onUpload();
      } else {
        setError('Error al subir el documento');
      }
    } catch (err) {
      setError('Error de red');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="document-upload-form">
      <h3>Subir documento</h3>
      <input type="file" onChange={e => setFile(e.target.files[0])} required />
      <input type="text" placeholder="Nombre (opcional)" value={nombre} onChange={e => setNombre(e.target.value)} />
      <input type="text" placeholder="Tipo (opcional)" value={tipo} onChange={e => setTipo(e.target.value)} />
      <button type="submit">Subir</button>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">¡Documento subido!</div>}
    </form>
  );
};

export default DocumentUpload;
