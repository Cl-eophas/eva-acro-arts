import Reveal from './Reveal';

const upcoming = [
  { name: 'Eva Acrodance and Art Tee', note: 'Coming soon' },
  { name: 'Training Hoodie', note: 'Coming soon' },
  { name: 'Grip / Chalk Bag', note: 'Coming soon' },
];

export default function Merchandise() {
  return (
    <section id="merchandise" className="relative overflow-x-clip bg-ink-900 px-5 py-24 sm:px-6 md:py-32" aria-labelledby="merch-heading">
      <div className="mx-auto w-full min-w-0 max-w-5xl text-center">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-magenta-400 sm:tracking-[0.35em]">Merchandise</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 id="merch-heading" className="mt-4 max-w-full font-display text-3xl font-semibold sm:text-4xl md:text-5xl">
            Wear the movement
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-5 max-w-xl text-white/70">
            The Eva Acrodance and Art merch line is in development. Get on the list to be first to know
            when it drops.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {upcoming.map((item, i) => (
            <Reveal key={item.name} delay={0.1 + i * 0.1}>
              <div className="group relative flex h-56 flex-col items-center justify-center rounded-2xl border border-dashed border-white/20 bg-white/5 p-6">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-magenta-600/30 via-violet-600/30 to-aqua-500/30">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold-300">
                    <path d="M6 7l1-3h10l1 3M6 7l-2 3v10a1 1 0 001 1h14a1 1 0 001-1V10l-2-3M6 7h12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white">{item.name}</h3>
                <span className="mt-2 rounded-full bg-gold-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-gold-300">
                  {item.note}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4} className="mt-12">
          <a
            href="#book"
            className="inline-flex max-w-full items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition hover:border-gold-400 hover:text-gold-300 sm:px-8 sm:py-4"
          >
            Enquire About Merchandise
          </a>
        </Reveal>
      </div>
    </section>
  );
}
