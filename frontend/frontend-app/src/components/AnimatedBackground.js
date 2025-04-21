import React, { useEffect } from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  useEffect(() => {
    // Simple particles animation using canvas
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = Array.from({length: 36}, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: 2 + Math.random() * 3,
      dx: -1 + Math.random() * 2,
      dy: -1 + Math.random() * 2,
      color: ['#1e90d6','#f5b700','#f25757'][Math.floor(Math.random()*3)]
    }));
    let animationId;
    function animate() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (let p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = p.color;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > window.innerWidth) p.dx *= -1;
        if (p.y < 0 || p.y > window.innerHeight) p.dy *= -1;
      }
      animationId = requestAnimationFrame(animate);
    }
    animate();
    window.addEventListener('resize', resizeCanvas);
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  return (
    <canvas id="bg-canvas" className="animated-bg-canvas"></canvas>
  );
};

export default AnimatedBackground;
