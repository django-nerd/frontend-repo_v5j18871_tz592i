import { useEffect, useRef } from 'react';

// A small satellite that orbits around a circular path as the user scrolls.
export default function ScrollSatellite() {
  const satRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = satRef.current;
      if (!el) return;
      const scrollY = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const t = docH > 0 ? scrollY / docH : 0; // 0..1

      // Orbit parameters
      const radius = Math.min(window.innerWidth, 600) * 0.45; // responsive orbit
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight * 0.5 + scrollY * 0.2; // slight parallax

      const angle = t * Math.PI * 2 * 2; // two full revolutions from top to bottom
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      el.style.transform = `translate(${x}px, ${y}px) rotate(${angle}rad)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div
      ref={satRef}
      className="pointer-events-none fixed left-0 top-0 z-40 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-amber-200 to-fuchsia-400 shadow-[0_0_20px_6px_rgba(251,191,36,0.25)]"
      aria-hidden
    >
      <div className="absolute -right-2 top-1/2 h-px w-6 -translate-y-1/2 bg-white/60" />
    </div>
  );
}
