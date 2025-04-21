import React, { useState } from 'react';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import UserPanel from './pages/UserPanel';
import PasswordResetRequest from './pages/PasswordResetRequest';
import PasswordResetConfirm from './pages/PasswordResetConfirm';
import LandingPage from './pages/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('access_token'));

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleRegister = () => {
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('access_token');
  };

  return (
    <Router>
      <div className="App">
        {/* Solo LandingPage/StickyNav maneja el header y darkmode */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register onRegister={handleRegister} />} />
          <Route path="/password-reset" element={<PasswordResetRequest />} />
          <Route path="/reset-password/:token" element={<PasswordResetConfirm />} />
          <Route path="/panel" element={isLoggedIn ? <UserPanel onLogout={handleLogout} /> : <Login onLogin={handleLogin} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
