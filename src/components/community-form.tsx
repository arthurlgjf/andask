"use client";

import { useState } from "react";

export function CommunityForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <p className="border-l-2 border-forest pl-6 text-lg leading-relaxed text-ink/80">
        Ďakujeme. Vašu správu sme prijali — ozveme sa vám, keď bude číslo na
        ceste alebo keď budeme hľadať príspevky do ďalšieho vydania.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-xs uppercase tracking-[0.15em] text-ink/55">
            Meno
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="mt-2 w-full border-0 border-b border-ink/25 bg-transparent py-2 text-ink placeholder:text-ink/35 focus:border-brick focus:outline-none"
            placeholder=""
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs uppercase tracking-[0.15em] text-ink/55">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-2 w-full border-0 border-b border-ink/25 bg-transparent py-2 text-ink placeholder:text-ink/35 focus:border-brick focus:outline-none"
            placeholder=""
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-xs uppercase tracking-[0.15em] text-ink/55">
          Správa alebo nápad na spoluprácu
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="mt-2 w-full resize-y border-0 border-b border-ink/25 bg-transparent py-2 text-ink placeholder:text-ink/35 focus:border-brick focus:outline-none"
          placeholder=""
        />
      </div>
      <div className="flex flex-wrap items-start gap-3">
        <input
          id="newsletter"
          name="newsletter"
          type="checkbox"
          className="mt-1 size-4 border-ink/30 text-brick focus:ring-brick/40"
        />
        <label htmlFor="newsletter" className="max-w-md text-sm leading-relaxed text-ink/75">
          Chcem dostávať upozornenia na nové čísla a pozvánky do komunitných
          podujatí ANDA.
        </label>
      </div>
      <button
        type="submit"
        className="border-b-2 border-ink bg-transparent pb-1 text-sm font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:border-brick hover:text-brick"
      >
        Odoslať
      </button>
    </form>
  );
}
