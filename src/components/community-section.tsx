import { CommunityForm } from "./community-form";

export function CommunitySection() {
  return (
    <section
      id="komunita"
      aria-labelledby="community-heading"
      className="border-b border-ink/10 bg-paper"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brick">
              Komunita
            </p>
            <h2
              id="community-heading"
              className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl"
            >
              Staň sa súčasťou ANDA
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/75">
              Napíšte nám, ak chcete odber, máte tip na tému, alebo by ste radi
              prispeli fotografiou či textom. Odpovedáme pomaly — ale vždy
              osobne.
            </p>
          </div>
          <CommunityForm />
        </div>
      </div>
    </section>
  );
}
