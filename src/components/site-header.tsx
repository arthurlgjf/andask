"use client";

import { motion, useReducedMotion } from "framer-motion";
import { editorialEase } from "./motion/ease";

const nav = [
  { href: "#aktualne", label: "Prvé číslo" },
  { href: "#o-casopise", label: "O časopise" },
  { href: "#archiv", label: "Archív" },
  { href: "#komunita", label: "Komunita" },
  { href: "#kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  const reduce = useReducedMotion();

  return (
    <motion.header
      className="sticky top-0 z-40 border-b border-ink/10 bg-cream/95 backdrop-blur-sm"
      initial={reduce ? false : { opacity: 0, y: -8 }}
      animate={reduce ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: editorialEase }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5 md:px-10">
        <a
          href="#aktualne"
          className="font-serif text-2xl font-semibold tracking-tight text-ink md:text-3xl"
        >
          ANDA
        </a>
        <nav
          aria-label="Hlavná navigácia"
          className="hidden items-center gap-8 text-sm font-medium tracking-wide text-ink/80 md:flex"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-brick"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <details className="group relative md:hidden">
          <summary className="cursor-pointer list-none text-sm font-medium tracking-wide text-ink marker:hidden [&::-webkit-details-marker]:hidden">
            Menu
            <span className="ml-1 text-brick" aria-hidden>
              +
            </span>
          </summary>
          <div className="absolute right-0 top-full z-50 mt-3 min-w-[12rem] border border-ink/10 bg-cream py-2 shadow-lg">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2.5 text-sm text-ink/85 transition-colors hover:bg-paper hover:text-brick"
              >
                {item.label}
              </a>
            ))}
          </div>
        </details>
      </div>
    </motion.header>
  );
}
