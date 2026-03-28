export function ContactSection() {
  return (
    <section id="kontakt" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
        <h2
          id="contact-heading"
          className="font-serif text-3xl font-semibold tracking-tight text-ink md:text-4xl"
        >
          Kontakt
        </h2>
        <div className="mt-12 grid gap-12 border-t border-ink/10 pt-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-ink/50">
              Vydavateľstvo
            </p>
            <p className="mt-3 text-lg font-medium text-ink">Vydavateľstvo ANDA</p>
            <p className="mt-4 text-ink/75 leading-relaxed">
              Redakcia a predplatné na rovnakej adrese. Pre tlačové otázky a
              spolupráce použite e-mail nižšie.
            </p>
          </div>
          <div className="space-y-6 text-ink/80">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-ink/50">
                E-mail
              </p>
              <a
                href="mailto:redakcia@anda.sk"
                className="mt-2 inline-block border-b border-ink/20 pb-0.5 text-lg transition-colors hover:border-brick hover:text-brick"
              >
                redakcia@anda.sk
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-ink/50">
                Predplatné
              </p>
              <a
                href="mailto:predplatne@anda.sk"
                className="mt-2 inline-block border-b border-ink/20 pb-0.5 text-lg transition-colors hover:border-brick hover:text-brick"
              >
                predplatne@anda.sk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
