import Reveal from './Reveal';
import Picture from './Picture';
import { performanceCategories } from '../data/content';
import { performanceWhatsappUrl } from '../config/whatsapp';

const experience = ['Major hotels and high-profile events across Kenya', "A children’s theme park in Italy", 'Major events in Djibouti', 'National celebrations and public holiday events for the President of Kenya', 'Advertising campaigns and billboard promotions for KCB Bank'];

export default function Performances() {
  return (
    <section
      id="performances"
      className="relative overflow-x-clip bg-ink-950 px-5 py-24 sm:px-6 md:py-32"
      aria-labelledby="performances-heading"
    >
      <div className="mx-auto w-full min-w-0 max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-magenta-400 sm:tracking-[0.35em]">
              Professional Performances
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 id="performances-heading" className="mt-4 max-w-full font-display text-3xl font-semibold sm:text-4xl md:text-5xl">
              Movement made for the moment
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-white/70">
              Aerial and acrobatic performances crafted for weddings, corporate events, festivals
              and private celebrations — memorable, professional and safety-first.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h3 className="font-display text-2xl font-semibold">Performance experience</h3>
          <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-white/70 sm:grid-cols-2">
            {experience.map((item) => <li key={item} className="border-l-2 border-gold-400/70 pl-3">{item}</li>)}
          </ul>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {performanceCategories.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1}>
              <div className="group relative flex min-h-[22rem] flex-col justify-end overflow-hidden rounded-2xl shadow-lg shadow-black/40 sm:min-h-[min(480px,70svh)]" data-keep-dark>
                <Picture
                  name={p.image}
                  alt={p.name}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-transparent" />
                <div className="relative z-10 p-5 sm:p-7">
                  <h3 className="font-display text-2xl font-semibold text-white">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{p.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-14 text-center">
          <a
            href={performanceWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex max-w-full items-center justify-center rounded-full bg-gradient-to-r from-magenta-600 via-violet-600 to-aqua-500 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow-glow transition hover:scale-[1.03] hover:brightness-110 sm:px-8 sm:py-4"
          >
            Enquire about a performance
          </a>
        </Reveal>
      </div>
    </section>
  );
}
