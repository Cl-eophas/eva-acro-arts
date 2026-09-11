import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import Picture from './Picture';
import { brand } from '../data/content';

export default function Hero() {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', shouldReduceMotion ? '0%' : '18%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', shouldReduceMotion ? '0%' : '35%']);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-[100svh] w-full max-w-full flex-col overflow-x-clip overflow-y-hidden bg-ink-950"
      aria-label="Introduction"
    >
      {/* Background image with subtle parallax */}
      <motion.div style={{ y: imgY }} className="absolute inset-0 scale-[1.04]">
        <Picture
          name="hero-aerial-hoop"
          alt="Aerial hoop performer suspended mid-routine under dramatic blue and green stage lighting"
          className="h-full w-full max-w-none object-cover object-[62%_20%] md:object-[58%_center]"
          eager
        />
      </motion.div>

      {/* Cinematic gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/56 to-transparent md:from-black/85 md:via-black/40" />
      <div className="absolute inset-0 bg-brand-glow opacity-45" />
      <div aria-hidden="true" className="hero-grain absolute inset-0 opacity-[0.13]" />

      {/* Decorative aerial ring accent — lightweight CSS/SVG, not WebGL, for performance */}
      {!shouldReduceMotion && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-52 top-[18%] hidden h-[min(520px,55vw)] w-[min(520px,55vw)] opacity-20 md:block"
        >
          <svg viewBox="0 0 200 200" fill="none" className="h-full w-full">
            <circle cx="100" cy="100" r="92" stroke="url(#ringGrad)" strokeWidth="1" />
            <defs>
              <linearGradient id="ringGrad" x1="0" y1="0" x2="200" y2="200">
                <stop offset="0%" stopColor="#FFDE58" />
                <stop offset="45%" stopColor="#FFB653" />
                <stop offset="100%" stopColor="#FF944D" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )}

      {/* Floating particles */}
      {!shouldReduceMotion && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="absolute block h-1.5 w-1.5 rounded-full bg-gold-300/60"
              style={{
                left: `${8 + i * 9}%`,
                top: `${20 + ((i * 37) % 60)}%`,
                animation: `float ${6 + (i % 5)}s ease-in-out ${i * 0.4}s infinite`,
              }}
            />
          ))}
        </div>
      )}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); opacity: 0.5; }
          50% { transform: translateY(-30px); opacity: 1; }
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] w-full min-w-0 flex-col justify-end overflow-x-clip px-5 pb-[max(5.5rem,calc(env(safe-area-inset-bottom)+4.5rem))] pt-[max(6rem,calc(env(safe-area-inset-top)+5rem))] sm:px-8 md:absolute md:left-[9vw] md:top-1/2 md:block md:min-h-0 md:w-[min(46vw,43rem)] md:-translate-y-1/2 md:px-0 md:py-0">
        <motion.div style={{ y: contentY, opacity: fade }}>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-6 max-w-full text-xs font-semibold uppercase leading-relaxed tracking-[0.24em] text-aqua-300 break-words sm:tracking-[0.34em]"
        >
          {brand.roles.join(' • ')}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="max-w-full font-display text-[clamp(2.5rem,5.8vw,6rem)] font-semibold leading-[0.92] tracking-[-0.045em]"
        >
          <span className="block text-white">EVA</span>
          <span className="mt-2 block text-gradient">ACRODANCE</span>
          <span className="block text-gradient">AND ART</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="font-script mt-7 max-w-full text-[clamp(1.25rem,2.35vw,2.35rem)] leading-tight text-gold-300"
        >
          {brand.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-5 max-w-[32rem] text-base leading-relaxed text-white/80 sm:text-lg"
        >
          Movement training and professional performance, where strength becomes expression.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-8 flex w-full max-w-full flex-col gap-3 sm:flex-row sm:gap-4"
        >
          <a
            href="#book"
            className="group inline-flex min-h-[3.25rem] w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-magenta-600 via-violet-600 to-aqua-500 px-7 py-3 text-sm font-semibold uppercase tracking-wider text-black shadow-glow transition hover:-translate-y-0.5 hover:brightness-110 sm:w-auto"
          >
            Book / Enquire <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#training"
            className="group inline-flex min-h-[3.25rem] w-full items-center justify-center gap-2 rounded-full border border-white/35 bg-white/5 px-7 py-3 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-gold-400 hover:text-gold-300 sm:w-auto"
          >
            Explore Movement <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-[max(0.75rem,env(safe-area-inset-bottom))] left-1/2 z-10 hidden -translate-x-1/2 text-white/60 min-[480px]:block [@media(max-height:700px)]:hidden">
        <div className="h-9 w-6 rounded-full border border-white/40 flex items-start justify-center p-1">
          <span className="h-2 w-1 rounded-full bg-gold-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
