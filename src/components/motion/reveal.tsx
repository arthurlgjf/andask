"use client";

import { motion, useReducedMotion } from "framer-motion";
import { editorialEase } from "./ease";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Sekundové oneskorenie pred štartom (pre stagger medzi sekciami). */
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px", amount: 0.15 }}
      transition={{
        duration: 0.8,
        delay,
        ease: editorialEase,
      }}
    >
      {children}
    </motion.div>
  );
}
