import { useCallback, useEffect } from "react";
import Particles from "@tsparticles/react";
import { loadTrianglesPreset } from "@tsparticles/preset-triangles";

export default function ParticlesBackground({ darkMode }) {
  const particlesInit = useCallback(async (engine) => {
    await loadTrianglesPreset(engine);
  }, []);

  useEffect(() => {
    // Forzar canvas visible y encima de todo
    const interval = setInterval(() => {
      const canvas = document.querySelector('#tsparticles canvas');
      if (canvas) {
        canvas.style.border = '8px solid fuchsia';
        canvas.style.background = 'rgba(255,255,0,0.5)';
        canvas.style.zIndex = '99999';
        canvas.style.position = 'fixed';
        canvas.style.top = '20px';
        canvas.style.left = '20px';
        canvas.style.width = '400px';
        canvas.style.height = '200px';
        canvas.style.pointerEvents = 'auto';
        clearInterval(interval);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Modern polygonal mesh/network effect
  const color = darkMode ? "#aee7ff" : "#1a6cf4";
  const triangleColor = darkMode ? "#1a6cf4" : "#aee7ff";

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "triangles",
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          color: { value: color },
          move: { enable: true, speed: 0.65, direction: "none", outModes: "bounce" },
          number: { value: 38, density: { enable: true, area: 900 } },
          opacity: { value: 0.7 },
          shape: { type: "circle" },
          size: { value: { min: 1.7, max: 3.3 } },
        },
        triangles: {
          enable: true,
          color: triangleColor,
          opacity: 0.15,
        },
        detectRetina: true,
        fullScreen: { enable: true, zIndex: -2 },
      }}
    />
  );
}
