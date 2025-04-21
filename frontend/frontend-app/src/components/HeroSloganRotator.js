import React, { useEffect, useState } from 'react';
import './HeroSloganRotator.css';

const slogans = [
  'Hackea tu estudio. Domina tus exámenes. Vive tu mejor versión.',
  'Convierte cualquier apunte en tu superpoder.',
  'Aprender nunca fue tan fácil (ni tan pro).',
  'Estudia menos, aprende más. El secreto de los cracks.',
  'La IA que convierte tu caos en sobresaliente.',
  'Estudia como un genio, vive como tú quieres.',
  'De apuntes a ventajas. De dudas a logros.'
];

const HeroSloganRotator = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slogans.length);
        setFade(true);
      }, 350);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`slogan-rotator${fade ? ' fade-in' : ' fade-out'}`}>{slogans[index]}</span>
  );
};

export default HeroSloganRotator;
