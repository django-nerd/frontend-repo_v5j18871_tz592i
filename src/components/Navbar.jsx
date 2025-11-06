import { useState } from 'react';
import { Rocket, Globe, Trophy, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Vision', href: '#vision' },
    { label: 'Quests', href: '#quests' },
    { label: 'Streaks', href: '#streaks' },
    { label: 'Community', href: '#community' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/10">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="group inline-flex items-center gap-2">
              <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-500">
                <Globe className="h-4 w-4 text-white" />
                <span className="absolute -right-1 -top-1 inline-flex h-3 w-3 animate-ping rounded-full bg-cyan-300 opacity-75" />
              </span>
              <span className="font-semibold tracking-tight text-white">
                Discovery Atlas
              </span>
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#get-started"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-violet-500 px-4 py-2 text-sm font-medium text-slate-900 shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
              >
                <Rocket className="h-4 w-4" /> Start exploring
              </a>
            </nav>

            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="border-t border-white/10 px-4 py-3 md:hidden">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-2 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#get-started"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-400 via-cyan-400 to-violet-500 px-4 py-2 text-sm font-medium text-slate-900"
                  onClick={() => setOpen(false)}
                >
                  <Trophy className="h-4 w-4" /> Start exploring
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
