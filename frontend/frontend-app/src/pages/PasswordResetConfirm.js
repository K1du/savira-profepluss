import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const PasswordResetConfirm = () => {
  const params = useParams();
  const { token } = params;
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg(null);
    setError(null);
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/password-reset/${token}/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });
      const data = await response.json();
      if (response.ok) {
        setMsg('Contraseña restablecida correctamente. Ahora puedes iniciar sesión.');
        setPassword('');
      } else {
        setError(data.error || 'No se pudo restablecer la contraseña.');
      }
    } catch (err) {
      setError('Error de red.');
    }
  };

  return (
    <div className="login-container">
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginBottom:'1rem'}}>
        <h2 style={{margin:0}}>Nueva contraseña</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Nueva contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Restablecer</button>
        {msg && <div className="success">{msg}</div>}
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default PasswordResetConfirm;
