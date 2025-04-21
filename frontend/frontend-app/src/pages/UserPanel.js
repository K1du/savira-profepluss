import React from 'react';
import DocumentUpload from '../components/DocumentUpload';
import DocumentList from '../components/DocumentList';

const UserPanel = ({ onLogout }) => {
  const handleLogout = () => {
    localStorage.removeItem('access_token');
    onLogout();
  };

  return (
    <div className="user-panel">
      <h2>Panel de Usuario</h2>
      <p>Bienvenido a tu panel. Aquí podrás gestionar tus documentos y perfil.</p>
      <DocumentUpload />
      <DocumentList />
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
};

export default UserPanel;
