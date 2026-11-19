import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

interface RevealSectionProps {
  id: string;
  className: string;
  children: ReactNode;
}

export default function RevealSection({ id, className, children }: RevealSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}
