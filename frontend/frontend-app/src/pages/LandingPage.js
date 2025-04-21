import React, { useState, useRef, useEffect } from 'react';
import StickyNav from '../components/StickyNav';
import FloatingDarkModeButton from '../components/FloatingDarkModeButton';
import PolygonalMeshBackground from '../components/PolygonalMeshBackground';
import TypewriterSlogan from '../components/TypewriterSlogan';
import SocialTestimonial from '../components/SocialTestimonial';
import './LandingPage.css';

const ctaDocentes = {
  title: 'Para docentes e instituciones (Próximamente)',
  desc: 'Crea recursos, comparte clases y potencia el aprendizaje en tu centro educativo.',
  action: { label: 'Soluciones para educación', href: '/educators', disabled: true },
  color: 'gradient-yellow'
};

const features = [
  {
    title: 'Todo tu material, en un solo lugar',
    desc: 'Sube apuntes, PDFs, imágenes y vídeos. Organiza y accede a tus recursos desde cualquier dispositivo.'
  },
  {
    title: 'IA que te entiende',
    desc: 'Obtén resúmenes, tests y flashcards automáticos sobre tus propios apuntes. Pregunta lo que quieras a tu propio contenido.'
  },
  {
    title: 'Aprende a tu ritmo',
    desc: 'Práctica adaptativa, seguimiento de progreso y recomendaciones personalizadas.'
  },
  {
    title: 'Colabora y comparte',
    desc: 'Crea grupos de estudio, comparte materiales y chatea con compañeros o profesores.'
  },
  {
    title: 'Herramientas de voz',
    desc: 'Dicta apuntes, escucha resúmenes y estudia con accesibilidad total.'
  },
  {
    title: 'Integraciones avanzadas',
    desc: 'Importa y sincroniza archivos desde Google Drive, Dropbox y OneDrive.'
  }
];

const LandingPage = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const testimonialsRef = useRef();
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('profepluss_darkmode');
      if (stored !== null) return stored === 'true';
      return document.body.classList.contains('dark-mode') ||
        window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const listener = () => {
      const stored = localStorage.getItem('profepluss_darkmode');
      if (stored !== null) {
        setDarkMode(stored === 'true');
      } else {
        setDarkMode(document.body.classList.contains('dark-mode') ||
          window.matchMedia('(prefers-color-scheme: dark)').matches);
      }
    };
    window.addEventListener('storage', listener);
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', listener);
    window.addEventListener('profepluss-darkmode-toggle', listener);
    return () => {
      window.removeEventListener('storage', listener);
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', listener);
      window.removeEventListener('profepluss-darkmode-toggle', listener);
    };
  }, []);

  // Autoplay effect
  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      if (testimonialsRef.current) {
        testimonialsRef.current.scrollBy({
          left: 230, // width of one card + gap
          behavior: 'smooth'
        });
        // Loop back to start if at end
        const { scrollLeft, scrollWidth, clientWidth } = testimonialsRef.current;
        if (scrollLeft + clientWidth + 10 >= scrollWidth) {
          testimonialsRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }
    }, 2100);
    return () => clearInterval(interval);
  }, [autoplay]);
  return (
    <div className="landing-root">
      <PolygonalMeshBackground darkMode={darkMode} />
      <StickyNav />
      <FloatingDarkModeButton />
      <main>
        <header className="landing-header dark-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} itemScope itemType="https://schema.org/Organization">
          <img src="/logo_profe_transparent.png" alt="ProfePluss, plataforma educativa digital para apuntes y vídeos" className="landing-logo" itemProp="logo" />
          <h1 className="landing-title" itemProp="name"><TypewriterSlogan /></h1>
          <p className="landing-slogan" itemProp="description">
            La plataforma educativa que convierte tus apuntes y vídeos en resultados reales.<br />
            Sube tus PDFs o imágenes y obtén resúmenes, tests y trucos personalizados al instante, crea audiolibros de tus apuntes.
          </p>
          <meta itemProp="url" content="https://profepluss.com" />
          <nav aria-label="Acciones principales" className="header-cta-nav">
          </nav>
          <meta itemProp="sameAs" content="https://twitter.com/profepluss" />
          <meta itemProp="sameAs" content="https://www.facebook.com/profepluss" />
          <meta itemProp="sameAs" content="https://www.tiktok.com/@profepluss" />
        </header>
        <section className="promo-video-section">
          <div className="promo-video-wrapper">
            {/* Aquí irá el video promocional. Por ahora, un placeholder. */}
            <div className="promo-video-placeholder">Próximamente: vídeo de presentación</div>
          </div>
        </section>
        <section className="features-section" id="features" itemScope itemType="https://schema.org/FAQPage">
          <h2 className="features-title">¿Por qué elegir ProfePluss?</h2>
          <div className="features-blocks">
            {features.map((f, i) => (
              <div className="feature-card" key={i} itemScope itemType="https://schema.org/Question">
                <h3 className="feature-title" itemProp="name">{f.title}</h3>
                <p className="feature-desc" itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer"><span itemProp="text" className="landing-benefit">{f.desc}</span></p>
              </div>
            ))}
          </div>
        </section>
        <section className="testimonials-section" itemScope itemType="https://schema.org/Review">
          <h2 className="testimonials-title">¡Qué dice la peña!</h2>
          <div className="testimonials-blocks" ref={testimonialsRef}
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            {Array.from({length: 14}).map((_,i) => (
              <SocialTestimonial
                key={i}
                name={i%3===0 ? "@martinez_edu" : i%3===1 ? "Ana López" : "@profejose"}
                text={i%3===0 ? "¡ProfePluss me ayudó a preparar la oposición en la mitad de tiempo! Increíble la calidad de los tests."
                  : i%3===1 ? "Gracias a ProfePluss he podido compartir materiales con mis alumnos de manera súper sencilla. ¡Recomendado!"
                  : "La integración con Google Drive es brutal. ¡Todo mi material en un solo lugar! #ProfePluss"}
                avatar={i%3===0 ? "https://randomuser.me/api/portraits/men/32.jpg" : i%3===1 ? "https://randomuser.me/api/portraits/women/44.jpg" : "https://randomuser.me/api/portraits/men/65.jpg"}
                platform={i%3===1 ? (i%5===0 ? "tiktok" : "facebook") : "twitter"}
                url={i%3===1 && i%5===0 ? "https://www.tiktok.com/@bts_official_bighit/video/7108894226401582337" : i%3===1 ? "https://www.facebook.com/groups/1234567890" : "#"}
                date={i%3===0 ? "Abr 2025" : i%3===1 ? "Mar 2025" : "Feb 2025"}
                itemProp="review"
              />
            ))}
          </div>
        </section>
        <section className="ctas-section docentes-section">
          <div
            className={`cta-card ${ctaDocentes.color} disabled-cta`}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            style={{ position: 'relative' }}
          >
            <h2 className="cta-card-title">{ctaDocentes.title}</h2>
            <p className="cta-card-desc">{ctaDocentes.desc}</p>
            <button className="cta-btn cta-btn-lg disabled-btn" disabled>{ctaDocentes.action.label}</button>
            {showTooltip && (
              <div className="cta-tooltip">Próximamente</div>
            )}
          </div>
        </section>
        <footer className="landing-footer" itemScope itemType="https://schema.org/WPFooter">
          <nav className="footer-nav" aria-label="Navegación pie de página">
            <a href="/contact" className="footer-link">Contacto</a>
          </nav>
          <div className="footer-rrss">
            <a href="https://twitter.com/profepluss" aria-label="Twitter" rel="noopener noreferrer" target="_blank">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7.47v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c13 8 27 0 27-16a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" fill="#1da1f2"></path></svg>
            </a>
            <a href="https://www.facebook.com/profepluss" aria-label="Facebook" rel="noopener noreferrer" target="_blank">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M22.675 0h-21.35C.595 0 0 .594 0 1.326v21.348C0 23.406.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .594 23.406 0 22.675 0" fill="#4267B2"></path></svg>
            </a>
            <a href="https://www.tiktok.com/@profepluss" aria-label="TikTok" rel="noopener noreferrer" target="_blank">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12.8 2.2h3.1c.2 2.2 1.7 3.9 3.7 4.1v3.1c-.7.1-1.5.1-2.2-.1v6.6c0 4.2-2.7 6.1-5.5 6.1-2.6 0-5.3-1.6-5.3-5.5 0-3.8 2.7-5.5 5.3-5.5.3 0 .7 0 1 .1v3.1c-.2 0-.5-.1-.8-.1-1.2 0-2.2.8-2.2 2.4 0 1.5 1 2.4 2.2 2.4 1.3 0 2.1-.7 2.1-2.2V2.2z" fill="#010101"></path><circle cx="19.5" cy="4.5" r="1.5" fill="#ee1d52"></circle><circle cx="4.5" cy="19.5" r="1.5" fill="#69c9d0"></circle></svg>
            </a>
          </div>
          <div className="footer-copyright"> {new Date().getFullYear()} ProfePluss. Todos los derechos reservados.</div>
        </footer>
      </main>
    </div>
  );
};

export default LandingPage;
