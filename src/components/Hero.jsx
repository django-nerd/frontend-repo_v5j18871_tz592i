import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-24">
      {/* 3D Earth with satellites */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.15),rgba(124,58,237,0.08)_40%,transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="[&_*]:text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <Sparkles className="h-3 w-3 text-cyan-300" /> AI quests • On‑chain proof • Community atlas
            </div>
            <h1 className="mt-5 font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
              Curiosity that moves you
            </h1>
            <p className="mt-4 max-w-xl text-white/80">
              Get personalized challenges that take you outdoors and into conversations. Verify discoveries on‑chain and collect unique badges as you build the world’s living atlas.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#get-started"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-violet-500 px-5 py-3 font-medium text-slate-900 shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
              >
                Start your streak
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
              <a
                href="#vision"
                className="inline-flex items-center rounded-full px-5 py-3 font-medium text-white/80 ring-1 ring-inset ring-white/20 transition hover:text-white hover:ring-white/40"
              >
                Learn how it works
              </a>
            </div>
            <div className="mt-8 grid max-w-lg grid-cols-3 gap-4 text-center text-white/80">
              <div>
                <div className="text-2xl font-semibold text-white">AI</div>
                <div className="text-xs">Personalized quests</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">Web3</div>
                <div className="text-xs">On‑chain proof</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">Maps</div>
                <div className="text-xs">Global atlas</div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none hidden md:block" aria-hidden>
            {/* Spacer column to let Spline breathe visually */}
            <div className="aspect-square" />
          </div>
        </div>
      </div>
    </section>
  );
}
