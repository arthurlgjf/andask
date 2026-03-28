export function ArchiveSection() {
  return (
    <section id="archiv" aria-labelledby="archive-heading" className="border-b border-ink/10">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-forest">
            Archív
          </p>
          <h2
            id="archive-heading"
            className="mt-4 font-serif text-3xl font-semibold tracking-tight text-ink md:text-4xl"
          >
            Predchádzajúce čísla
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">
            Práve vychádza naše prvé číslo. Staršie vydania tu pribudnú s každým
            mesiacom — vždy na čítanie aj na stiahnutie.
          </p>
        </div>

        <div className="mt-16 border border-ink/10 bg-paper px-8 py-14 md:px-12 md:py-16">
          <p className="max-w-xl font-serif text-xl font-medium leading-snug text-ink md:text-2xl">
            Archív sa ešte len začína.
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-ink/70">
            Prvé číslo nájdete vyššie v sekcii{" "}
            <a href="#aktualne" className="border-b border-ink/30 text-ink transition-colors hover:border-brick hover:text-brick">
              Prvé číslo
            </a>
            . Ďalšie mesiace pribudnú sem po vydaní.
          </p>
        </div>
      </div>
    </section>
  );
}
