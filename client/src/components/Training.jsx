import Reveal from './Reveal';
import Picture from './Picture';
import { trainingGroups, disciplines } from '../data/content';
import { trainingWhatsappUrl } from '../config/whatsapp';

export default function Training() {
  return (
    <section id="training" className="relative overflow-x-clip bg-ink-900 px-5 py-24 sm:px-6 md:py-32" aria-labelledby="training-heading">
      <div className="mx-auto w-full min-w-0 max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-400 sm:tracking-[0.35em]">Training</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 id="training-heading" className="mt-4 max-w-full font-display text-3xl font-semibold sm:text-4xl md:text-5xl">
              Rising Stars
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-white/70">
              Classes for every age and ability — from a child's first cartwheel to advanced
              aerial choreography.
            </p>
          </Reveal>
        </div>

        {/* Age groups */}
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {trainingGroups.map((g, i) => (
            <Reveal key={g.id} delay={i * 0.1}>
              <div className="group relative flex min-h-[22rem] flex-col justify-end overflow-hidden rounded-2xl sm:min-h-[min(420px,70svh)]" data-keep-dark>
                <Picture
                  name={g.image}
                  alt={`${g.name} training at Eva Acrodance and Art`}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
                <div className="relative z-10 p-4 sm:p-6">
                  <h3 className="font-display text-2xl font-semibold text-white">{g.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-wider text-gold-300">Move with confidence, grace, power and purpose</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">{g.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Disciplines */}
        <div className="mt-20">
          <Reveal>
            <h3 className="text-center font-display text-2xl font-semibold sm:text-3xl">Disciplines</h3>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {disciplines.map((d, i) => (
              <Reveal key={d.id} delay={i * 0.08}>
                <div className="flex h-full min-w-0 items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-magenta-500/50 hover:bg-white/[0.08]">
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                    <Picture name={d.image} alt="" className="h-full w-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-white">{d.name}</h4>
                    <p className="mt-0.5 text-sm text-white/60">{d.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2} className="mt-14 text-center">
          <a
            href={trainingWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex max-w-full items-center justify-center rounded-full bg-gradient-to-r from-aqua-500 via-violet-600 to-magenta-600 px-6 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-white shadow-glow transition hover:scale-[1.03] hover:brightness-110 sm:px-8 sm:py-4"
          >
            Enquire about training
          </a>
        </Reveal>
      </div>
    </section>
  );
}
