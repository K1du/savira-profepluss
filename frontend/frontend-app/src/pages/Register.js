import React, { useState } from 'react';
import GoogleAuthButton from '../components/GoogleAuthButton';
import { GoogleOAuthProvider } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';

const Register = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    try {
      const response = await fetch('http://127.0.0.1:8000/api/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, email })
      });
      if (response.ok) {
        setSuccess(true);
        setUsername('');
        setPassword('');
        setEmail('');
        if (onRegister) onRegister();
      } else {
        const data = await response.json();
        setError(data.detail || 'Error en el registro');
      }
    } catch (err) {
      setError('Error de red');
    }
  };

  return (
    <div className="register-container">
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginBottom:'1rem'}}>
        <img src="/logo_profe.ico" alt="ProfePluss logo" style={{width:48,height:48,marginBottom:8}} />
        <h2 style={{margin:0}}>Registro</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Registrarse</button>
        {error && <div className="error">{error}</div>}
      </form>
      <GoogleOAuthProvider clientId="TU_CLIENT_ID_GOOGLE">
        <GoogleAuthButton
          onSuccess={async (credentialResponse) => {
            const { credential } = credentialResponse;
            if (!credential) return;
            // Enviar token a backend
            const res = await fetch('http://127.0.0.1:8000/api/google-auth/', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ credential })
            });
            const data = await res.json();
            if (res.ok) {
              localStorage.setItem('access_token', data.access);
              localStorage.setItem('refresh_token', data.refresh);
              window.location.reload();
            } else {
              alert(data.error || 'Error autenticando con Google');
            }
          }}
          text="signup_with"
        />
      </GoogleOAuthProvider>
      {success && <div className="success">¡Registro exitoso!</div>}
    </div>
  );
};

export default Register;
