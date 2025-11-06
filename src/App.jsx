import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import ScrollSatellite from './components/ScrollSatellite';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(ellipse_at_top_left,rgba(124,58,237,0.15),transparent_60%)]" />
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <ScrollSatellite />
      <footer id="community" className="relative border-t border-white/10 py-10 text-center text-white/60">
        <p>
          © {new Date().getFullYear()} Discovery Atlas — built for explorers.
        </p>
      </footer>
    </div>
  );
}
