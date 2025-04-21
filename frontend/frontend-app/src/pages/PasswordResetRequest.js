import React, { useState } from 'react';

const PasswordResetRequest = () => {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg(null);
    setError(null);
    try {
      const response = await fetch('http://127.0.0.1:8000/api/password-reset/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await response.json();
      if (response.ok) {
        setMsg('Si existe una cuenta con ese correo, se ha enviado un email con el enlace de restablecimiento.');
        setEmail('');
      } else {
        setError(data.error || 'No se pudo enviar el correo de restablecimiento.');
      }
    } catch (err) {
      setError('Error de red.');
    }
  };

  return (
    <div className="login-container">
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginBottom:'1rem'}}>
        <h2 style={{margin:0}}>Restablecer contraseña</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button type="submit">Solicitar enlace</button>
        {msg && <div className="success">{msg}</div>}
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default PasswordResetRequest;
