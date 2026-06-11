import { useEffect, useState } from "react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section-dark";
import Pricing from "@/components/pricing-section";
import { Gallery4, type Gallery4Item } from "@/components/gallery4";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { CtaCard } from "@/components/call-to-action-cta";
import { Standort } from "@/components/standort";
import { Footer } from "@/components/footer";
import { Impressum, Datenschutz } from "@/components/legal";

import heroShop from "@/assets/hero-shop.jpg";
import cut1 from "@/assets/cut-1.jpg";
import beard from "@/assets/beard.jpg";
import tools from "@/assets/tools.jpg";
import razor from "@/assets/razor.jpg";
import client from "@/assets/client.jpg";

const INSTA = "https://www.instagram.com/murat_barber_shop/";

const GALLERY_ITEMS: Gallery4Item[] = [
  {
    id: "fade",
    title: "Skin Fade",
    description:
      "Sauberer Übergang, scharfe Kante — der Schnitt, für den Murat bekannt ist.",
    href: INSTA,
    image: tools,
  },
  {
    id: "bart",
    title: "Bart & Rasur",
    description:
      "Bartschnitt mit Schere, Maschine und heißem Tuch — Kontur inklusive.",
    href: INSTA,
    image: cut1,
  },
  {
    id: "lineup",
    title: "Konturen & Line-up",
    description: "Präzise Linien mit dem Messer — sitzt bis zum nächsten Termin.",
    href: INSTA,
    image: razor,
  },
  {
    id: "styling",
    title: "Styling & Finish",
    description:
      "Föhnen, Produkt, fertig — du gehst raus wie aus dem Reel.",
    href: INSTA,
    image: client,
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Super freundlich, mega sauber — und der Schnitt sitzt jedes Mal. Klare Empfehlung.",
    name: "Google-Bewertung",
    designation: "Stammhaus Weinheim · ★★★★★",
    src: heroShop,
  },
  {
    quote:
      "Schnelle Termine, faire Preise und ein gepflegter Laden. Ich gehe nirgendwo anders mehr hin.",
    name: "Google-Bewertung",
    designation: "Stammhaus Weinheim · ★★★★★",
    src: razor,
  },
  {
    quote:
      "Top Beratung, entspannte Atmosphäre, perfektes Ergebnis. 100 Prozent Empfehlung.",
    name: "Facebook-Bewertung",
    designation: "100 % Empfehlungen · Weinheim",
    src: client,
  },
];

function Home() {
  return (
    <>
      <HeroSection bottomImage={{ src: heroShop, alt: "Der Laden von innen — drei Plätze, warmes Licht" }} />
      <Pricing />
      <Gallery4
        title="Unsere Arbeit"
        description="Platzhalter-Fotos — beim echten Launch kommen hier Murats eigene Cuts aus Instagram rein. Der Content existiert schon."
        items={GALLERY_ITEMS}
      />
      <section className="py-16 md:py-24" id="bewertungen">
        <div className="mx-auto max-w-5xl px-6 text-center md:px-8">
          <h2 className="font-display text-5xl tracking-wide md:text-6xl">
            Das sagen Kunden
          </h2>
          <p className="mt-3 text-muted-foreground">
            Echte Stimmen vom Stammhaus Weinheim — die Bensheimer Bewertungen
            sammelt die neue Seite dann selbst ein.
          </p>
        </div>
        <AnimatedTestimonials testimonials={TESTIMONIALS} autoplay />
      </section>
      <section className="mx-auto max-w-screen-xl px-4 pb-16 md:px-8 md:pb-24">
        <CtaCard
          imageSrc={beard}
          title="Heute noch ein frischer Cut?"
          description="Ruf kurz durch oder schreib per WhatsApp — wir sagen dir sofort, wann ein Platz frei ist."
          phoneHref="tel:+4915736594872"
          phoneLabel="01573 6594872"
          whatsappHref="https://wa.me/4915736594872"
          whatsappLabel="WhatsApp"
        />
      </section>
      <Standort />
    </>
  );
}

export default function App() {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const onHash = () => {
      setRoute(window.location.hash);
      if (window.location.hash.startsWith("#/")) {
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      {route === "#/impressum" ? (
        <Impressum />
      ) : route === "#/datenschutz" ? (
        <Datenschutz />
      ) : (
        <Home />
      )}
      <Footer />
    </div>
  );
}
