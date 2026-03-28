"use client";

import { motion, useReducedMotion } from "framer-motion";
import { editorialEase } from "./motion/ease";

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: editorialEase },
  },
};

const coverItem = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.85, ease: editorialEase },
  },
};

export function HeroSection() {
  const reduce = useReducedMotion();

  if (reduce) {
    return <HeroStatic />;
  }

  return (
    <section
      id="aktualne"
      aria-labelledby="hero-heading"
      className="border-b border-ink/10"
    >
      <motion.div
        className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:items-center md:gap-16 md:px-10 md:py-24 lg:gap-24"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.div
          className="order-2 flex flex-col justify-center md:order-1"
          variants={item}
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-ink/55">
            Mesačník pre každého
          </p>
          <h1
            id="hero-heading"
            className="font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-ink md:text-5xl lg:text-[3.25rem]"
          >
            Prvé číslo
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/75">
            Marec 2026 · číslo 1 — prvé vydanie ANDA.{" "}
            <span className="text-ink">
              Názov čísla: „Vráťme život zo sociálnych sietí do reality.“
            </span>
          </p>
          <div className="mt-10 flex flex-wrap items-baseline gap-x-10 gap-y-4">
            <a
              href="#"
              className="group inline-flex items-center gap-2 border-b-2 border-ink pb-1 text-sm font-semibold tracking-wide text-ink transition-colors group-hover:border-brick group-hover:text-brick"
            >
              Čítať online
              <span aria-hidden className="text-brick">
                →
              </span>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-sm font-medium tracking-wide text-ink/85 transition-colors hover:border-forest hover:text-forest"
            >
              Stiahnuť PDF
            </a>
          </div>
        </motion.div>

        <motion.div className="order-1 md:order-2" variants={coverItem}>
          <div
            className="relative mx-auto aspect-[3/4] w-full max-w-md bg-paper shadow-[0_1px_0_0_rgba(26,26,24,0.06),0_24px_48px_-12px_rgba(26,26,24,0.12)] md:mx-0 md:max-w-none"
            role="img"
            aria-label='Obálka prvého čísla ANDA — názov „Vráťme život zo sociálnych sietí do reality“, abstraktná ilustrácia bez fotografie'
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cream via-paper to-[#ebe4d8]" />
            <div className="absolute left-8 top-8 h-px w-16 bg-brick/80 md:left-10 md:top-10" />
            <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-forest/15 to-transparent" />
            <div className="relative flex h-full flex-col justify-between p-8 md:p-10 lg:p-12">
              <div>
                <p className="font-serif text-6xl font-semibold leading-none text-ink md:text-7xl lg:text-8xl">
                  ANDA
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.35em] text-ink/50">
                  Mesačník
                </p>
              </div>
              <div className="space-y-1 border-t border-ink/15 pt-8">
                <p className="text-xs uppercase tracking-[0.2em] text-brick/90">
                  Číslo 1
                </p>
                <p className="font-serif text-lg leading-snug text-ink md:text-xl md:leading-snug">
                  Vráťme život zo sociálnych sietí do reality
                </p>
                <p className="text-sm text-ink/60">03 / 2026</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function HeroStatic() {
  return (
    <section
      id="aktualne"
      aria-labelledby="hero-heading"
      className="border-b border-ink/10"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:items-center md:gap-16 md:px-10 md:py-24 lg:gap-24">
        <div className="order-2 flex flex-col justify-center md:order-1">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-ink/55">
            Mesačník pre každého
          </p>
          <h1
            id="hero-heading"
            className="font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-ink md:text-5xl lg:text-[3.25rem]"
          >
            Prvé číslo
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/75">
            Marec 2026 · číslo 1 — prvé vydanie ANDA.{" "}
            <span className="text-ink">
              Názov čísla: „Vráťme život zo sociálnych sietí do reality.“
            </span>
          </p>
          <div className="mt-10 flex flex-wrap items-baseline gap-x-10 gap-y-4">
            <a
              href="#"
              className="group inline-flex items-center gap-2 border-b-2 border-ink pb-1 text-sm font-semibold tracking-wide text-ink transition-colors group-hover:border-brick group-hover:text-brick"
            >
              Čítať online
              <span aria-hidden className="text-brick">
                →
              </span>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-sm font-medium tracking-wide text-ink/85 transition-colors hover:border-forest hover:text-forest"
            >
              Stiahnuť PDF
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div
            className="relative mx-auto aspect-[3/4] w-full max-w-md bg-paper shadow-[0_1px_0_0_rgba(26,26,24,0.06),0_24px_48px_-12px_rgba(26,26,24,0.12)] md:mx-0 md:max-w-none"
            role="img"
            aria-label='Obálka prvého čísla ANDA — názov „Vráťme život zo sociálnych sietí do reality“, abstraktná ilustrácia bez fotografie'
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cream via-paper to-[#ebe4d8]" />
            <div className="absolute left-8 top-8 h-px w-16 bg-brick/80 md:left-10 md:top-10" />
            <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-forest/15 to-transparent" />
            <div className="relative flex h-full flex-col justify-between p-8 md:p-10 lg:p-12">
              <div>
                <p className="font-serif text-6xl font-semibold leading-none text-ink md:text-7xl lg:text-8xl">
                  ANDA
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.35em] text-ink/50">
                  Mesačník
                </p>
              </div>
              <div className="space-y-1 border-t border-ink/15 pt-8">
                <p className="text-xs uppercase tracking-[0.2em] text-brick/90">
                  Číslo 1
                </p>
                <p className="font-serif text-lg leading-snug text-ink md:text-xl md:leading-snug">
                  Vráťme život zo sociálnych sietí do reality
                </p>
                <p className="text-sm text-ink/60">03 / 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
