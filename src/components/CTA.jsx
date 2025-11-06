import { Rocket, Trophy } from 'lucide-react';

export default function CTA() {
  return (
    <section id="get-started" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(56,189,248,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 text-center backdrop-blur">
          <h3 className="font-display text-2xl text-white sm:text-3xl">
            Begin your discovery streak today
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-white/80">
            Complete daily quests, earn points, and redeem rewards while exploring your city and connecting with people.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-violet-500 px-6 py-3 font-medium text-slate-900 shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
            >
              <Rocket className="h-4 w-4" /> Get early access
            </a>
            <a
              href="#community"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-white/80 ring-1 ring-inset ring-white/20 transition hover:text-white hover:ring-white/40"
            >
              <Trophy className="h-4 w-4" /> See discovery badges
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
