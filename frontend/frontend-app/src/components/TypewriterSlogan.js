import React, { useEffect, useRef, useState, useMemo } from 'react';
import './TypewriterSlogan.css';

const slogans = [
  <span className="typewriter-slogan line-hack"> <span className="color-hack">Hackea</span> tus estudios.</span>,
  <span className="typewriter-slogan line-domina"> <span className="color-domina">Domina</span> tus exámenes. <span role="img" aria-label="fuego">🔥</span></span>,
  <span className="typewriter-slogan line-aprende">Estudia menos, aprende más. <span role="img" aria-label="estrella">⭐</span></span>,
  <span className="typewriter-slogan line-superpoder">Convierte cualquier apunte en tu <span className="color-superpoder">superpoder</span>.</span>,
  <span className="typewriter-slogan line-cool">Aprender nunca fue tan fácil (ni tan pro). <span role="img" aria-label="cool">😎</span></span>,
  <span className="typewriter-slogan line-ia">La <span className="color-ia">IA</span> que convierte tu caos en sobresaliente.</span>,
  <span className="typewriter-slogan line-genio">Saca al <span className="color-genio">genio</span> que llevas dentro.</span>,
  <span className="typewriter-slogan line-ventajas">Ventajas Savira: <span className="color-ventajas">IA</span>, comunidad, recursos y éxito.</span>
];

const TYPING_SPEED = 42;
const PAUSE_BETWEEN = 1100;

const TypewriterSlogan = () => {
  const [text, setText] = useState("");
  const [sloganIdx, setSloganIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);
  const timeoutRef = useRef();

  // Convert slogans to plain text for typing effect
  const plainSlogans = useMemo(() => [
    "Hackea tus estudios.",
    "Domina tus exámenes. 🔥",
    "Estudia menos, aprende más. ⭐",
    "Convierte cualquier apunte en tu superpoder.",
    "Aprender nunca fue tan fácil (ni tan pro). 😎",
    "La IA que convierte tu caos en sobresaliente.",
    "Saca al genio que llevas dentro.",
    "Ventajas Savira: IA, comunidad, recursos y éxito."
  ], []);

  useEffect(() => {
    const current = plainSlogans[sloganIdx];
    if (!isDeleting && charIdx <= current.length) {
      timeoutRef.current = setTimeout(() => {
        setText(current.slice(0, charIdx));
        setCharIdx((c) => c + 1);
      }, TYPING_SPEED);
    } else if (!isDeleting && charIdx > current.length) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), PAUSE_BETWEEN);
    } else if (isDeleting && charIdx > 0) {
      timeoutRef.current = setTimeout(() => {
        setText(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      }, TYPING_SPEED / 1.8);
    } else if (isDeleting && charIdx === 0) {
      setIsDeleting(false);
      setSloganIdx((i) => (i + 1) % slogans.length);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [charIdx, isDeleting, sloganIdx, plainSlogans]);

  // Render with color highlights and correct line color
  function renderWithHighlights(text) {
    const idx = plainSlogans.findIndex((t) => t === text);
    if (idx === -1) {
      // fallback: render partial with current color
      const currIdx = sloganIdx;
      return <span className={`typewriter-slogan line-${getLineClass(currIdx)}`}>{text}<span className="typewriter-cursor">|</span></span>;
    }
    return slogans[idx];
  }

  function getLineClass(idx) {
    switch(idx) {
      case 0: return 'hack';
      case 1: return 'domina';
      case 2: return 'aprende';
      case 3: return 'superpoder';
      case 4: return 'cool';
      case 5: return 'ia';
      case 6: return 'genio';
      case 7: return 'ventajas';
      default: return '';
    }
  }

  return (
    renderWithHighlights(text)
  );
};

export default TypewriterSlogan;
