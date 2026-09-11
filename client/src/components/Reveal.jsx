import { motion, useReducedMotion } from 'framer-motion';

export default function Reveal({ children, delay = 0, y = 24, className = '', as = 'div' }) {
  const shouldReduceMotion = useReducedMotion();
  const Comp = motion[as] || motion.div;

  if (shouldReduceMotion) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  );
}
