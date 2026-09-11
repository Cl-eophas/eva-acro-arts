import Reveal from './Reveal';
import Picture from './Picture';

export default function About() {
  return (
    <section id="about" className="relative overflow-x-clip bg-[#fffdf6] px-5 py-24 text-[#00005C] sm:px-6 md:py-32" aria-labelledby="about-heading">
      <div className="mx-auto grid w-full min-w-0 max-w-7xl items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative order-2 min-w-0 lg:order-1">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-aurora opacity-30 blur-2xl" aria-hidden="true" />
            <Picture
              name="about-flexibility-bridge"
              alt="Eva Acrodance and Art flexibility and movement pose"
              className="aspect-[3/4] w-full rounded-2xl object-cover shadow-2xl shadow-black/50"
            />
          </div>
        </Reveal>

        <div className="order-1 min-w-0 lg:order-2">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 sm:tracking-[0.35em]">About Eva</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 id="about-heading" className="mt-4 max-w-full font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
              Movement with power and grace.
            </h2>
          </Reveal>
          {[
            'Eva is an all-round movement artist, performer and trainer specializing in aerial hoop, silks, trapeze, hand balancing, acrodance, contortion, pole, lollipop and ground acrobatics.',
            'Her work brings together strength, flexibility, storytelling and creativity to inspire confidence, power, expression and grace through movement.',
          ].map((p, i) => (
            <Reveal key={i} delay={0.15 + i * 0.1}>
              <p className="mt-5 leading-relaxed text-[#00005C]/75">{p}</p>
            </Reveal>
          ))}

          <Reveal delay={0.35} className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {['Aerial arts', 'Acrobatics', 'Movement storytelling'].map((h, i) => (
              <div key={i} className="border-l-2 border-[#FF944D] bg-[#FFD457]/15 px-4 py-3 text-sm text-[#00005C]/75">
                {h}
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
