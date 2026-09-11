import Reveal from './Reveal';
import { brand } from '../data/content';

export default function Intro() {
  return (
    <section className="relative overflow-x-clip bg-ink-950 px-5 py-20 sm:px-6 md:py-28" aria-label="Introduction to Eva">
      <div className="mx-auto w-full min-w-0 max-w-4xl text-center">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-magenta-400 sm:tracking-[0.35em]">
            Eva Acrodance and Art
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 max-w-full font-display text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
            A home for powerful, graceful movement.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {brand.fullName} brings together aerial artistry, acrobatics and coaching under one
            roof — training the next generation of movers while performing professionally for
            events, stages and celebrations. Whether you're here to book a performance or start
            training, you're in the right place.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
