import { Map, Compass, Award, Users } from 'lucide-react';

const features = [
  {
    title: 'AI Curiosity Prompter',
    desc: 'Daily quests tuned to your interests, location, and what’s trending in science, culture, and nature.',
    icon: Compass,
  },
  {
    title: 'On‑Chain Verification',
    desc: 'Prove discoveries with geo‑stamped media and mint collectible badges for rare finds.',
    icon: Award,
  },
  {
    title: 'Community Atlas',
    desc: 'A living map of stories and knowledge from explorers worldwide—searchable and shareable.',
    icon: Map,
  },
  {
    title: 'Wisdom Exchange',
    desc: 'Earn tokens for verified quests and helpful micro‑guides, then unlock deeper challenges.',
    icon: Users,
  },
];

export default function Features() {
  return (
    <section id="vision" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl text-white sm:text-4xl">Built for real‑world curiosity</h2>
          <p className="mt-3 text-white/70">
            Less doom‑scrolling, more wonder. We turn exploration into a verified, shareable, and rewarding habit.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 text-slate-900">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
