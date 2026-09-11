import { useRef, useState } from 'react';
import Reveal from './Reveal';
import { getImage } from '../data/images';

export default function Trailer() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const poster = getImage('trailer-poster');

  const handlePlay = () => {
    setPlaying(true);
    // Video element only mounts once playing is true (lazy-loaded), so wait a tick
    requestAnimationFrame(() => {
      videoRef.current?.play().catch(() => {});
    });
  };

  return (
    <section id="trailer" className="relative overflow-x-clip bg-ink-950 px-5 py-24 sm:px-6 md:py-32" aria-labelledby="trailer-heading">
      <div className="mx-auto w-full min-w-0 max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 sm:tracking-[0.35em]">
              Watch
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 id="trailer-heading" className="mt-4 max-w-full font-display text-3xl font-semibold sm:text-4xl md:text-5xl">
              Movement in motion
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-white/70">
              A short cinematic look at Eva's aerial artistry, captured live. Turn your sound on.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.25} className="mt-12">
          <div className="group relative aspect-video w-full max-w-full overflow-hidden rounded-2xl bg-black shadow-2xl shadow-black/50" data-keep-dark>
            {!playing ? (
              <button
                type="button"
                onClick={handlePlay}
                className="absolute inset-0 h-full w-full"
                aria-label="Play the EVA ACRODANCE AND ART trailer"
              >
                <picture className="block h-full w-full">
                  {poster.webp && <source srcSet={poster.webp} type="image/webp" />}
                  <img
                    src={poster.jpg}
                    alt="Aerial hoop performer at a live event — trailer preview"
                    className="h-full w-full object-cover"
                  />
                </picture>
                <div className="absolute inset-0 bg-black/30 transition group-hover:bg-black/20" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/15 backdrop-blur-md ring-1 ring-white/40 transition group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-magenta-600 group-hover:to-aqua-500">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="white" className="ml-1">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </span>
                <span className="absolute bottom-4 left-4 right-4 max-w-[calc(100%-2rem)] rounded-full bg-black/50 px-3 py-1.5 text-left text-[0.65rem] font-medium uppercase tracking-wider text-white backdrop-blur-sm sm:bottom-5 sm:left-5 sm:right-auto sm:text-xs">
                  Play trailer • has sound
                </span>
              </button>
            ) : (
              <video
                ref={videoRef}
                controls
                playsInline
                preload="none"
                poster={poster.jpg}
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src={`${import.meta.env.BASE_URL}video/eva-trailer.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
