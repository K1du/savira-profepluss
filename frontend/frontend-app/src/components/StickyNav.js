import React from 'react';
import './StickyNav.css';

const StickyNav = () => {
  return (
    <nav className="sticky-nav">
      <a href="/" className="sticky-logo-link" aria-label="Inicio">
        <img alt="ProfePluss logo" className="sticky-logo" src="/logo_profe_transparent.png" style={{width:'60px',height:'60px'}} />
      </a>
      <ul className="nav-links">
        <li><a href="#features">Características</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/pricing">Precios</a></li>
        <li><a href="/login">Iniciar sesión</a></li>
        <li><a href="/register" className="nav-cta">Regístrate gratis</a></li>
      </ul>
    </nav>
  );
};

export default StickyNav;
