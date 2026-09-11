import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { whatsappUrl } from '../config/whatsapp';

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-6 w-6" fill="currentColor" aria-hidden="true">
      <path d="M16.03 3.2a12.69 12.69 0 0 0-10.9 19.2L3.2 28.8l6.57-1.72A12.7 12.7 0 1 0 16.03 3.2Zm0 23.2c-2 0-3.96-.54-5.67-1.57l-.4-.24-3.9 1.02 1.05-3.8-.26-.4a10.2 10.2 0 1 1 9.18 4.99Zm5.59-7.64c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-1.74-.87-2.89-1.56-4.04-3.55-.3-.52.3-.48.86-1.6.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.57-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.7.3 1.25.48 1.68.61.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

export default function FloatingWhatsApp() {
  const [showPreview, setShowPreview] = useState(true);
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-[max(1.125rem,env(safe-area-inset-bottom))] right-[max(1.125rem,env(safe-area-inset-right))] z-[60]"
    >
      {showPreview && (
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 1.4 }}
          className="mb-3 hidden w-64 border border-[#FFDE58]/50 bg-[#00005C] p-4 text-white shadow-[0_16px_40px_rgba(0,0,0,.3)] md:block"
        >
          <p className="text-sm font-semibold text-[#FFDE58]">Need help?</p>
          <p className="mt-1 text-sm leading-relaxed text-white/75">Chat with EVA ACRODANCE AND ART on WhatsApp.</p>
          <span className="mt-3 block text-xs font-semibold uppercase tracking-wider text-[#FF944D]">Start a conversation →</span>
        </motion.div>
      )}

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with EVA ACRODANCE AND ART on WhatsApp"
        onMouseEnter={() => setShowPreview(false)}
        onFocus={() => setShowPreview(false)}
        onClick={() => setShowPreview(false)}
        animate={reduceMotion ? undefined : { y: [0, -3, 0] }}
        transition={reduceMotion ? undefined : { duration: 2.8, delay: 2.4, repeat: 1, ease: 'easeInOut' }}
        whileHover={reduceMotion ? undefined : { scale: 1.035 }}
        whileTap={{ scale: 0.97 }}
        className="group flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#FFDE58] bg-black text-white shadow-[0_12px_30px_rgba(255,148,77,.25)] transition-colors hover:border-[#FF944D] hover:bg-[#00005C] md:h-auto md:w-auto md:min-w-[10.5rem] md:gap-3 md:rounded-none md:px-4 md:py-3"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm"><WhatsAppIcon /></span>
        <span className="hidden items-center gap-1 text-sm font-semibold md:flex">Chat with us <span className="transition-transform group-hover:translate-x-1">→</span></span>
      </motion.a>
    </motion.div>
  );
}
