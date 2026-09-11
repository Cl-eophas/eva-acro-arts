import Reveal from './Reveal';
import Picture from './Picture';

const arts = [
  ['Aerial Hoop', 'perf-hoop-green'], ['Aerial Silks', 'perf-hoop-solo-2'], ['Trapeze', 'gallery-hoop-1'],
  ['Hand Balancing', 'train-handstand-1'], ['Acrodance', 'train-acro-splits'], ['Contortion', 'about-flexibility-bridge'],
  ['Pole', 'gallery-hoop-5'], ['Lollipop', 'gallery-hoop-8'], ['Ground Acrobatics', 'gallery-floor-flow'],
];

export default function AcroArts() {
  return (
    <section id="acro-arts" className="bg-black px-5 py-24 sm:px-6 md:py-32" aria-labelledby="acro-heading">
      <div className="mx-auto max-w-7xl">
        <Reveal><p className="text-xs font-semibold uppercase tracking-[.35em] text-[#FFDE58]">Acro arts</p></Reveal>
        <div className="mt-4 grid gap-6 md:grid-cols-[1fr_.75fr] md:items-end">
          <Reveal delay={.1}><h2 id="acro-heading" className="font-display text-4xl font-semibold leading-[.95] sm:text-5xl md:text-6xl">A language of <span className="text-gradient">movement.</span></h2></Reveal>
          <Reveal delay={.2}><p className="max-w-lg text-sm leading-relaxed text-white/70 sm:text-base">Eva’s movement practice spans aerial, acrobatic and ground disciplines—each explored with strength, flexibility, creativity and story.</p></Reveal>
        </div>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {arts.map(([name, image], index) => (
            <Reveal key={name} delay={index * .045}>
              <article className="group relative aspect-[4/3] overflow-hidden border border-white/10 bg-[#00005C]">
                <Picture name={image} alt={`${name} movement practice`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />
                <h3 className="absolute bottom-0 left-0 p-5 font-display text-2xl text-white sm:text-3xl">{name}</h3>
                <div className="absolute right-4 top-4 h-2 w-2 bg-[#FFDE58] transition-transform duration-300 group-hover:scale-[2.5]" aria-hidden="true" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
