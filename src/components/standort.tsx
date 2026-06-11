import { MapPin, Clock, Instagram, ExternalLink } from "lucide-react";

const ZEITEN = [
  { tag: "Montag", zeit: "geschlossen" },
  { tag: "Dienstag – Freitag", zeit: "10:00 – 19:00" },
  { tag: "Samstag", zeit: "10:00 – 17:00" },
  { tag: "Sonntag", zeit: "geschlossen" },
];

export function Standort() {
  return (
    <section className="py-16 md:py-24" id="kontakt">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <h2 className="font-display text-center text-5xl tracking-wide md:text-6xl">
          So findest du uns
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border bg-card p-8">
            <h3 className="flex items-center gap-2 text-lg font-bold">
              <MapPin className="h-5 w-5 text-primary" /> Standort Bensheim
            </h3>
            <p className="mt-4 text-2xl font-semibold">
              Lammertsgasse 3<br />
              64625 Bensheim
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Mitten in der Altstadt — 2 Minuten vom Marktplatz.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Murat+Barber+Shop+Lammertsgasse+3+Bensheim"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                <ExternalLink className="h-4 w-4" /> Route in Google Maps
              </a>
              <a
                href="https://www.instagram.com/murat_barber_shop/"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                <Instagram className="h-4 w-4" /> @murat_barber_shop
              </a>
            </div>
            <p className="mt-6 border-t border-white/10 pt-4 text-sm text-muted-foreground">
              Auch in <strong className="text-foreground">Weinheim</strong>:
              Ehretstraße 1 — unser Stammhaus seit 2020.
            </p>
          </div>

          <div className="rounded-xl border bg-card p-8">
            <h3 className="flex items-center gap-2 text-lg font-bold">
              <Clock className="h-5 w-5 text-primary" /> Öffnungszeiten
            </h3>
            <ul className="mt-4 divide-y divide-white/10">
              {ZEITEN.map((z) => (
                <li
                  key={z.tag}
                  className="flex items-center justify-between py-3"
                >
                  <span className="text-sm text-zinc-300">{z.tag}</span>
                  <span
                    className={`text-sm font-semibold ${z.zeit === "geschlossen" ? "text-muted-foreground" : "text-foreground"}`}
                  >
                    {z.zeit}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 rounded-lg border border-primary/30 bg-primary/10 px-3 py-2 text-xs text-primary">
              Demo-Hinweis: Zeiten & Preise werden vor dem echten Launch mit
              Murat abgeglichen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
