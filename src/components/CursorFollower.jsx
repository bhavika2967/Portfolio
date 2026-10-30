import React, { useEffect, useState, useRef } from 'react';

/**
 * CursorFollower
 * 
 * Interactive Easter Egg: A subtle, smooth cyber-emerald cursor follower
 * that trails the mouse position across the screen with gentle spring physics.
 * Automatically expands on interactive elements and hides on touch/leave.
 */
export default function CursorFollower() {
  const [visible, setVisible] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mouse = useRef({ x: -100, y: -100, targetX: -100, targetY: -100 });
  const ring = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable for pointer-fine devices (avoid mobile touch interference)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let animId;

    const handleMouseMove = (e) => {
      mouse.current.targetX = e.clientX;
      mouse.current.targetY = e.clientY;
      if (!visible) setVisible(true);

      // Check if hovering interactive element
      const target = e.target;
      if (
        target &&
        (target.closest('button') ||
          target.closest('a') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('.group\\/badge') ||
          target.closest('.tilt-card'))
      ) {
        setIsHoveringInteractive(true);
      } else {
        setIsHoveringInteractive(false);
      }
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const animate = () => {
      // Lerp ring towards mouse with smooth damping
      ring.current.x += (mouse.current.targetX - ring.current.x) * 0.18;
      ring.current.y += (mouse.current.targetY - ring.current.y) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.targetX}px, ${mouse.current.targetY}px, 0)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`;
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [visible]);

  return (
    <>
      {/* Outer Halo Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 -ml-4 -mt-4 z-50 rounded-full transition-opacity duration-300 ${
          visible ? 'opacity-100' : 'opacity-0'
        } ${
          isHoveringInteractive
            ? 'w-10 h-10 -ml-5 -mt-5 border border-emerald-400/80 bg-emerald-400/10 shadow-[0_0_20px_rgba(16,185,129,0.35)] scale-110'
            : 'w-8 h-8 border border-emerald-500/40 bg-emerald-500/5 shadow-[0_0_12px_rgba(16,185,129,0.2)]'
        }`}
        style={{ willChange: 'transform' }}
      />

      {/* Center Core Spark Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 -ml-1 -mt-1 z-50 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981] transition-opacity duration-200 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ willChange: 'transform' }}
      />
    </>
  );
}

