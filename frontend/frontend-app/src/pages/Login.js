import React, { useState } from 'react';
import GoogleAuthButton from '../components/GoogleAuthButton';
import { GoogleOAuthProvider } from '@react-oauth/google';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await fetch('http://127.0.0.1:8000/api/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (response.ok && data.access) {
        localStorage.setItem('access_token', data.access);
        onLogin();
      } else {
        setError(data.detail || data.error || 'Credenciales incorrectas');
      }
    } catch (err) {
      setError('Error de red');
    }
  };

  return (
    <div className="login-container">
      {/* El logo solo se muestra en header, no aquí */}
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginBottom:'1rem'}}>
        <h2 style={{margin:0}}>Iniciar sesión</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Introduce tu e-mail"
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
        <button type="submit">Entrar</button>
        <div style={{marginTop:'1rem'}}>
          <a href="/password-reset">¿Olvidaste tu contraseña?</a>
        </div>
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
          text="signin_with"
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default Login;
