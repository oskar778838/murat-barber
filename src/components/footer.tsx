import { Instagram, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0a0a0c]">
      <div className="mx-auto max-w-screen-xl px-6 py-14 md:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
              Standorte
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              <li>
                <strong className="text-foreground">Bensheim</strong> —
                Lammertsgasse 3
              </li>
              <li>
                <strong className="text-foreground">Weinheim</strong> —
                Ehretstraße 1
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
              Kontakt
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="tel:+4915736594872"
                  className="inline-flex items-center gap-2 text-zinc-300 transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4" /> 01573 6594872
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/murat_barber_shop/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 text-zinc-300 transition-colors hover:text-primary"
                >
                  <Instagram className="h-4 w-4" /> @murat_barber_shop
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@murat_barber_shop"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 text-zinc-300 transition-colors hover:text-primary"
                >
                  ♪ TikTok
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
              Rechtliches
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              <li>
                <a
                  href="#/impressum"
                  className="transition-colors hover:text-primary"
                >
                  Impressum
                </a>
              </li>
              <li>
                <a
                  href="#/datenschutz"
                  className="transition-colors hover:text-primary"
                >
                  Datenschutz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p
          aria-hidden="true"
          className="font-display pointer-events-none mt-14 bg-gradient-to-b from-white/15 to-transparent bg-clip-text text-center text-[clamp(4rem,16vw,13rem)] leading-none tracking-widest text-transparent select-none"
        >
          MURAT
        </p>

        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:flex-row">
          <span>© 2026 Murat Barber Shop · Demo-Entwurf</span>
          <span>
            Gestaltet von{" "}
            <a
              href="https://oskarmarketing.de"
              target="_blank"
              rel="noreferrer noopener"
              className="font-semibold text-zinc-300 transition-colors hover:text-primary"
            >
              Oskar Webdesign, Bensheim
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
