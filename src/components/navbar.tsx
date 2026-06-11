import { Phone } from "lucide-react";

const LINKS = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#galerie", label: "Galerie" },
  { href: "#bewertungen", label: "Bewertungen" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/85 backdrop-blur">
      <div className="bg-primary px-4 py-1 text-center text-xs font-bold tracking-wide text-primary-foreground">
        DEMO-ENTWURF — gestaltet von Oskar Webdesign, Bensheim · noch nicht
        beauftragt
      </div>
      <nav className="mx-auto flex max-w-screen-xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <a
          href="#"
          className="font-display text-2xl tracking-widest text-foreground"
        >
          MURAT <span className="text-primary">BARBER SHOP</span>
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-zinc-300 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="tel:+4915736594872"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-colors hover:bg-[#e8744f]"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">01573 6594872</span>
          <span className="sm:hidden">Anrufen</span>
        </a>
      </nav>
    </header>
  );
}
