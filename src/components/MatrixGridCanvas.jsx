import React, { useEffect, useRef } from 'react';

/**
 * MatrixGridCanvas
 * 
 * An interactive HTML5 canvas background featuring a Cyber-Emerald matrix-dot grid.
 * Responds dynamically to mouse and touch movements with a spring-physics ripple
 * wave and perspective shifting, with gentle ambient idle undulation.
 */
export default function MatrixGridCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = 0;
    let height = 0;
    let dpr = window.devicePixelRatio || 1;

    // Mouse tracking & ripple dynamics
    const mouse = {
      x: -9999,
      y: -9999,
      targetX: -9999,
      targetY: -9999,
      radius: 175
    };

    const SPACING = 34; // distance between grid dots in pixels
    let dots = [];

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = window.devicePixelRatio || 1;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      initDots();
    };

    const initDots = () => {
      dots = [];
      const cols = Math.ceil(width / SPACING) + 2;
      const rows = Math.ceil(height / SPACING) + 2;

      for (let i = -1; i < cols; i++) {
        for (let j = -1; j < rows; j++) {
          dots.push({
            baseX: i * SPACING,
            baseY: j * SPACING,
            x: i * SPACING,
            y: j * SPACING,
            vx: 0,
            vy: 0,
            accent: (i + j) % 8 === 0 // occasional accent dot
          });
        }
      }
    };

    const handlePointerMove = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      mouse.targetX = clientX;
      mouse.targetY = clientY;
    };

    const handlePointerLeave = () => {
      mouse.targetX = -9999;
      mouse.targetY = -9999;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('mouseleave', handlePointerLeave);

    handleResize();

    let time = 0;

    const render = () => {
      time += 0.024;

      // Smooth mouse interpolation (lerp)
      mouse.x += (mouse.targetX - mouse.x) * 0.16;
      mouse.y += (mouse.targetY - mouse.y) * 0.16;

      ctx.clearRect(0, 0, width, height);

      const mouseRadiusSq = mouse.radius * mouse.radius;

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        // Ambient idle undulating wave
        const idleWave = Math.sin(dot.baseX * 0.008 + time) * Math.cos(dot.baseY * 0.008 + time * 0.8) * 3.5;

        // Mouse displacement & wave ripple calculations
        const dx = mouse.x - dot.baseX;
        const dy = mouse.y - dot.baseY;
        const distSq = dx * dx + dy * dy;

        let rippleForceX = 0;
        let rippleForceY = 0;
        let proximityFactor = 0;

        if (distSq < mouseRadiusSq && distSq > 0) {
          const dist = Math.sqrt(distSq);
          proximityFactor = 1 - dist / mouse.radius;

          // Push-pull ripple wave
          const angle = Math.atan2(dy, dx);
          const waveOffset = Math.sin(dist * 0.08 - time * 4) * 16 * proximityFactor;
          rippleForceX = -Math.cos(angle) * waveOffset;
          rippleForceY = -Math.sin(angle) * waveOffset;
        }

        const targetX = dot.baseX + rippleForceX;
        const targetY = dot.baseY + idleWave + rippleForceY;

        // Spring physics damping
        dot.vx = (targetX - dot.x) * 0.2;
        dot.vy = (targetY - dot.y) * 0.2;
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Calculate dynamic dot size and glow
        const size = 1.3 + proximityFactor * 2.2 + (dot.accent ? 0.35 : 0);

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);

        if (proximityFactor > 0.3) {
          // Intense neon lime/emerald glow directly under or near pointer
          ctx.fillStyle = `rgba(163, 230, 53, ${0.4 + proximityFactor * 0.55})`;
          ctx.shadowColor = '#10b981';
          ctx.shadowBlur = 8;
        } else if (dot.accent) {
          // Secondary accent nodes
          ctx.fillStyle = 'rgba(52, 211, 153, 0.35)';
          ctx.shadowBlur = 0;
        } else {
          // Matte cyber-emerald matrix nodes
          ctx.fillStyle = 'rgba(16, 185, 129, 0.16)';
          ctx.shadowBlur = 0;
        }

        ctx.fill();
      }

      ctx.shadowBlur = 0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('mouseleave', handlePointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-auto z-0 w-full h-full"
      aria-hidden="true"
    />
  );
}

