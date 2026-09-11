import Reveal from './Reveal';

const places = ['Braeburn Garden Estate School', 'Peponi School', 'Durham International School', 'AYANA', 'Sarakasi Trust', 'Woodland School'];

export default function CoachingExperience() {
  return (
    <section className="bg-ink-900 px-5 py-24 sm:px-6 md:py-32" aria-labelledby="coaching-heading">
      <div className="mx-auto max-w-6xl text-center">
        <Reveal><p className="text-xs font-semibold uppercase tracking-[.35em] text-gold-400">Training &amp; coaching</p></Reveal>
        <Reveal delay={.1}><h2 id="coaching-heading" className="mt-4 font-display text-3xl font-semibold sm:text-4xl md:text-5xl">Sharing movement knowledge</h2></Reveal>
        <Reveal delay={.2}><p className="mx-auto mt-5 max-w-2xl text-white/70">Eva has trained students in movement arts, acrobatics, flexibility and choreography at:</p></Reveal>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{places.map((place, i) => <Reveal key={place} delay={.2 + i * .06}><div className="rounded-xl border border-white/10 bg-white/5 px-5 py-5 font-display text-lg text-white/90">{place}</div></Reveal>)}</div>
      </div>
    </section>
  );
}
