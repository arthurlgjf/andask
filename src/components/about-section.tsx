export function AboutSection() {
  return (
    <section
      id="o-casopise"
      aria-labelledby="about-heading"
      className="border-b border-ink/10 bg-paper"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brick">
              O časopise
            </p>
            <h2
              id="about-heading"
              className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl"
            >
              Prečo ANDA existuje
            </h2>
          </div>
          <div className="space-y-8 text-lg leading-[1.75] text-ink/80 lg:col-span-7">
            <p className="font-serif text-2xl font-medium leading-snug text-ink md:text-[1.65rem]">
              „Vráťme život zo sociálnych sietí do reality.“
            </p>
            <p>
              ANDA je mesačník pre ľudí, ktorí hľadajú hĺbku namiesto skratky,
              ticho namiesto hluku a skutočné stretnutia namiesto notifikácií.
              Práve vychádza naše prvé číslo — píšeme o miestach, príbehoch a
              témach, ktoré sa nedajú zhrnúť do jedného príspevku.
            </p>
            <p>
              Sme teplí, priami a veríme v komunitu — nie v algoritmus. Každé
              číslo je ako list papiera medzi vami a svetom: pomalý, dotykateľný,
              čitateľný.
            </p>
            <p className="text-sm text-ink/55">
              Vydáva{" "}
              <span className="text-ink/80">Vydavateľstvo ANDA</span>.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-6 border-t border-ink/10 pt-16 md:grid-cols-3 md:gap-10">
          {[
            {
              title: "Ľudské",
              text: "Rozhovory a texty píšu ľudia pre ľudí — bez korporátneho jazyka a prázdnych fráz.",
            },
            {
              title: "Autentické",
              text: "Žiadne umelé scenáre. Reálne hlasy, reálne mestá, reálne otázky.",
            },
            {
              title: "Komunitné",
              text: "Čitateľov berieme vážne. Radi počujeme, čo vám chýba aj čo vás teší.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-serif text-xl font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink/70">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
