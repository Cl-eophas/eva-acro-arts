import Reveal from './Reveal';
import Picture from './Picture';

const focus = ['Handstands', 'Functional strength', 'Mobility training', 'Beginner to advanced calisthenics', 'Flexibility development'];

export default function AdultTraining() {
  return (
    <section id="adult-training" className="bg-[#fff6df] px-5 py-24 text-[#00005C] sm:px-6 md:py-32" aria-labelledby="adult-training-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <Reveal><p className="text-xs font-semibold uppercase tracking-[.35em] text-aqua-400">For adults</p></Reveal>
          <Reveal delay={0.1}><h2 id="adult-training-heading" className="mt-4 font-display text-3xl font-semibold sm:text-4xl md:text-5xl">Adult Calisthenics &amp; Strength Training</h2></Reveal>
          <Reveal delay={0.2}><p className="mt-5 max-w-xl leading-relaxed text-[#00005C]/75">Build strength, flexibility, body control, endurance, mobility and confidence through purposeful movement training.</p></Reveal>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {focus.map((item, index) => <Reveal key={item} delay={0.25 + index * .05}><li className="border border-[#00005C]/15 bg-white px-4 py-3 text-sm text-[#00005C]/80">{item}</li></Reveal>)}
          </ul>
          <Reveal delay={0.5}><a href="#book" className="mt-9 inline-flex rounded-full bg-gradient-to-r from-magenta-600 via-violet-600 to-aqua-500 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-black shadow-glow">Enquire about training</a></Reveal>
        </div>
        <Reveal className="relative"><Picture name="train-strength-pose" alt="Strength and movement training pose" className="aspect-[4/5] w-full rounded-2xl object-cover shadow-2xl shadow-black/50" /></Reveal>
      </div>
    </section>
  );
}
