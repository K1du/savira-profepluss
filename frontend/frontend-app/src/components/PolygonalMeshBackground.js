import React, { useRef, useEffect } from "react";

// Utilidad para color según modo
const getColors = (darkMode) => ({
  node: darkMode ? "#aee7ff" : "#1a6cf4",
  line: darkMode ? "#3ddc97" : "#b1b6c8",
  tri: darkMode ? "#1a6cf4" : "#aee7ff"
});

export default function PolygonalMeshBackground({ darkMode }) {
  const canvasRef = useRef();
  const animationRef = useRef();
  const nodesRef = useRef([]);
  const sizeRef = useRef({ w: window.innerWidth, h: window.innerHeight });

  // Configuración de la malla
  const NODES = 34;
  const SPEED = 0.45; 
  const CONNECT_DIST = 120;
  const TRIANGLE_DIST = 90;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let running = true;

    // Ajustar tamaño
    function resize() {
      sizeRef.current.w = window.innerWidth;
      sizeRef.current.h = window.innerHeight;
      canvas.width = sizeRef.current.w;
      canvas.height = sizeRef.current.h;
    }
    resize();
    window.addEventListener("resize", resize);

    // Crear nodos
    function randomNode() {
      return {
        x: Math.random() * sizeRef.current.w,
        y: Math.random() * sizeRef.current.h,
        vx: (Math.random()-0.5) * SPEED,
        vy: (Math.random()-0.5) * SPEED
      };
    }
    nodesRef.current = Array.from({length: NODES}, randomNode);

    // Función para calcular distancia entre dos puntos
    function dist(a,b) {
      return Math.hypot(a.x-b.x, a.y-b.y);
    }

    // Animación principal
    function animate() {
      if (!running) return;
      ctx.clearRect(0, 0, sizeRef.current.w, sizeRef.current.h);
      const { node, line, tri } = getColors(darkMode);
      ctx.globalAlpha = 1;

      // Dibujar triángulos
      for (let i = 0; i < NODES; i++) {
        for (let j = i+1; j < NODES; j++) {
          for (let k = j+1; k < NODES; k++) {
            const a = nodesRef.current[i], b = nodesRef.current[j], c = nodesRef.current[k];
            const dab = dist(a,b), dac = dist(a,c), dbc = dist(b,c);
            if (dab < TRIANGLE_DIST && dac < TRIANGLE_DIST && dbc < TRIANGLE_DIST) {
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.lineTo(c.x, c.y);
              ctx.closePath();
              ctx.globalAlpha = 0.09; 
              ctx.fillStyle = tri;
              ctx.fill();
            }
          }
        }
      }

      // Dibujar conexiones
      for (let i = 0; i < NODES; i++) {
        for (let j = i+1; j < NODES; j++) {
          const a = nodesRef.current[i], b = nodesRef.current[j];
          if (dist(a,b) < CONNECT_DIST) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.globalAlpha = 0.19; 
            ctx.strokeStyle = line;
            ctx.lineWidth = 1.1;
            ctx.stroke();
          }
        }
      }

      // Dibujar nodos
      for (let i = 0; i < NODES; i++) {
        const n = nodesRef.current[i];
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2.5, 0, 2 * Math.PI);
        ctx.globalAlpha = 0.7; 
        ctx.fillStyle = node;
        ctx.fill();
      }

      // Mover nodos
      for (let i = 0; i < NODES; i++) {
        const n = nodesRef.current[i];
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > sizeRef.current.w) n.vx *= -1;
        if (n.y < 0 || n.y > sizeRef.current.h) n.vy *= -1;
      }

      animationRef.current = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      running = false;
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [darkMode]);

  // Siempre usar el tamaño más reciente
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        zIndex: -2,
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none"
      }}
      width={sizeRef.current.w}
      height={sizeRef.current.h}
      aria-hidden="true"
    />
  );
}
