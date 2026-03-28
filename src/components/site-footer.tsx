export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-ink/10 bg-ink text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <p className="font-serif text-2xl font-semibold tracking-tight">ANDA</p>
          <p className="mt-2 text-sm text-cream/65">
            Mesačník pre každého · Vydavateľstvo ANDA
          </p>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-cream/55">
          © {new Date().getFullYear()} Vydavateľstvo ANDA. Všetky práva vyhradené.
        </p>
      </div>
    </footer>
  );
}
