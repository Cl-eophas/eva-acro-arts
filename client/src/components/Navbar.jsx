import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { getImage } from '../data/images';
import ThemeToggle from './ThemeToggle';

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#acro-arts', label: 'Acro Arts' },
  { href: '#training', label: 'Training' },
  { href: '#performances', label: 'Performances' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#book', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const logo = getImage('logo-transparent');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full max-w-full pt-[env(safe-area-inset-top,0px)] transition-colors duration-300 ${
        scrolled || open ? 'bg-ink-950/90 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-gradient-to-b from-black/50 to-transparent'
      }`}
    >
      <nav className="mx-auto flex w-full min-w-0 max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:gap-3 sm:px-5 md:px-8" aria-label="Primary">
        <a href="#home" className="flex min-w-0 shrink-0 items-center gap-2" aria-label="EVA ACRODANCE AND ART home">
          <img src={logo.webp || logo.jpg} alt="EVA ACRODANCE AND ART logo" className="h-10 w-auto max-h-10 max-w-[min(9rem,40vw)] md:h-14 md:max-h-14 md:max-w-[11rem]" />
        </a>

        <ul className="hidden min-w-0 lg:flex items-center gap-x-3 xl:gap-x-8 text-xs xl:text-sm font-medium tracking-wide text-white/90">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-gold-400 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#book"
            className="rounded-full bg-gradient-to-r from-magenta-600 via-violet-600 to-aqua-500 px-4 py-2.5 text-sm font-semibold text-black shadow-glow hover:brightness-110 transition xl:px-6"
          >
            Book Now
          </a>
        </div>

        <div className="lg:hidden flex items-center gap-1">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-white"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden max-h-[min(100svh-4.5rem,calc(100dvh-4.5rem))] overflow-y-auto overflow-x-hidden bg-ink-950/95 backdrop-blur-md border-t border-white/10"
          >
            <ul className="flex flex-col px-6 py-4 gap-1 text-base">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 border-b border-white/5 text-white/90"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href="#book"
                  onClick={() => setOpen(false)}
                  className="block text-center rounded-full bg-gradient-to-r from-magenta-600 via-violet-600 to-aqua-500 px-6 py-3 font-semibold text-black"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
