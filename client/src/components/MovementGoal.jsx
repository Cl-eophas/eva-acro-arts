import Reveal from './Reveal';

export default function MovementGoal() {
  return (
    <section className="relative overflow-hidden bg-ink-900 px-5 py-24 sm:px-6 md:py-32" aria-labelledby="goal-heading">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(192,38,211,.22),transparent_45%)]" />
      <div className="relative mx-auto max-w-5xl text-center">
        <Reveal><p className="text-xs font-semibold uppercase tracking-[.35em] text-gold-400">Our goal</p></Reveal>
        <Reveal delay={0.1}>
          <h2 id="goal-heading" className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            To build strong, expressive, disciplined, and confident performers and athletes through <span className="text-gradient">movement, creativity, and training.</span>
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
