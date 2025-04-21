import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

const GoogleAuthButton = ({ onSuccess, text }) => {
  return (
    <div style={{marginTop: '1rem', display: 'flex', justifyContent: 'center'}}>
      <GoogleLogin
        onSuccess={onSuccess}
        onError={() => alert('Error al autenticar con Google')}
        text={text || 'signin_with'}
        width={240}
      />
    </div>
  );
};

export default GoogleAuthButton;
