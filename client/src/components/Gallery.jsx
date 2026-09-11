import { useEffect, useMemo, useState, useCallback, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal from './Reveal';
import Picture from './Picture';
import { getImage } from '../data/images';
import { galleryItems, galleryFilters } from '../data/content';

const PREVIEW_COUNT = 8;

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const lastTriggerRef = useRef(null);

  const filtered = useMemo(
    () => (filter === 'all' ? galleryItems : galleryItems.filter((g) => g.category.includes(filter))),
    [filter]
  );

  const visible = showAll ? filtered : filtered.slice(0, PREVIEW_COUNT);
  const remaining = filtered.length - PREVIEW_COUNT;

  const handleFilterChange = (id) => {
    setFilter(id);
    setShowAll(false);
  };

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
    requestAnimationFrame(() => lastTriggerRef.current?.focus());
  }, []);

  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + visible.length) % visible.length)),
    [visible.length]
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % visible.length)),
    [visible.length]
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [activeIndex, closeLightbox, showPrev, showNext]);

  const active = activeIndex !== null ? visible[activeIndex] : null;

  return (
    <section id="gallery" className="relative overflow-x-clip bg-ink-900 px-5 py-24 sm:px-6 md:py-32" aria-labelledby="gallery-heading">
      <div className="mx-auto w-full min-w-0 max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-400 sm:tracking-[0.35em]">Gallery</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 id="gallery-heading" className="mt-4 max-w-full font-display text-3xl font-semibold sm:text-4xl md:text-5xl">
              Moments in motion
            </h2>
          </Reveal>
        </div>

        {/* Filters */}
        <Reveal delay={0.15} className="mt-10 flex flex-wrap justify-center gap-2">
          {galleryFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => handleFilterChange(f.id)}
              aria-pressed={filter === f.id}
              className={`rounded-full px-4 py-2 text-sm font-medium transition sm:px-5 ${
                filter === f.id
                  ? 'bg-gradient-to-r from-magenta-600 via-violet-600 to-aqua-500 text-white shadow-glow'
                  : 'border border-white/15 text-white/70 hover:border-gold-400 hover:text-gold-300'
              }`}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-4">
          {visible.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={(e) => {
                lastTriggerRef.current = e.currentTarget;
                setActiveIndex(i);
              }}
              className="group relative aspect-square w-full overflow-hidden rounded-xl [&>picture]:block [&>picture]:h-full [&>picture]:w-full"
              aria-label={`Open image: ${item.alt}`}
              data-keep-dark
            >
              <Picture
                name={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition duration-300 group-hover:opacity-100">
                <span className="p-3 text-left text-xs text-white/90 break-words">{item.alt}</span>
              </div>
            </button>
          ))}
        </div>

        {filtered.length > PREVIEW_COUNT && (
          <Reveal delay={0.2} className="mt-14 text-center">
            <button
              type="button"
              onClick={() => setShowAll((open) => !open)}
              aria-expanded={showAll}
              className="inline-flex max-w-full items-center justify-center rounded-full bg-gradient-to-r from-magenta-600 via-violet-600 to-aqua-500 px-6 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-white shadow-glow transition hover:scale-[1.03] hover:brightness-110 sm:px-8 sm:py-4"
            >
              {showAll ? 'Show Less' : `View Full Gallery (${remaining} more)`}
            </button>
          </Reveal>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black/90 p-3 backdrop-blur-sm sm:p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            onClick={closeLightbox}
            data-keep-dark
          >
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close image viewer"
              className="absolute right-3 top-[max(0.75rem,env(safe-area-inset-top))] rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:right-5 sm:top-5"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>

            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); showPrev(); }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:left-6"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); showNext(); }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:right-6"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <motion.figure
              key={active.id}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="flex w-full max-h-[min(85svh,calc(100dvh-2rem))] max-w-4xl flex-col items-center px-10 sm:px-14"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={getImage(active.src).jpg}
                alt={active.alt}
                className="h-auto max-h-[min(75svh,calc(100dvh-8rem))] w-auto max-w-full rounded-lg object-contain shadow-2xl"
              />
              <figcaption className="mt-3 max-w-full px-2 text-center text-sm text-white/70 break-words">{active.alt}</figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
