import type { ReactNode } from "react";

function LegalShell({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto min-h-[60vh] max-w-3xl px-6 py-16">
      <a
        href="#"
        className="text-sm font-semibold text-primary hover:underline"
      >
        ← Zurück zur Startseite
      </a>
      <h1 className="font-display mt-6 text-5xl tracking-wide">{title}</h1>
      <div className="mt-8 space-y-4 text-zinc-300">{children}</div>
    </main>
  );
}

export function Impressum() {
  return (
    <LegalShell title="Impressum">
      <p className="rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-primary">
        Demo-Entwurf — dies ist keine veröffentlichte Website. Vor dem echten
        Launch werden hier die Angaben des Betreibers (Murat Barber Shop)
        nach § 5 DDG eingetragen.
      </p>
      <p>
        Angaben gemäß § 5 DDG:
        <br />
        [Vollständiger Name des Inhabers]
        <br />
        Murat Barber Shop
        <br />
        Lammertsgasse 3, 64625 Bensheim
      </p>
      <p>
        Kontakt: [Telefon] · [E-Mail]
        <br />
        Umsatzsteuer-ID bzw. Kleinunternehmer-Hinweis: [folgt]
      </p>
    </LegalShell>
  );
}

export function Datenschutz() {
  return (
    <LegalShell title="Datenschutz">
      <p className="rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-primary">
        Demo-Entwurf — die vollständige Datenschutzerklärung wird vor dem
        echten Launch ergänzt.
      </p>
      <p>
        Diese Seite ist bewusst sparsam gebaut: keine Cookies, kein Tracking,
        keine eingebetteten Drittanbieter-Inhalte, Schriften werden lokal
        geladen. Links zu Instagram, TikTok und Google Maps öffnen die
        jeweiligen Anbieter erst nach Klick.
      </p>
    </LegalShell>
  );
}
