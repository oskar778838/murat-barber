import { CircleCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  title: string;
  price: string;
  description?: string;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
}

const pricingData: PricingCardProps[] = [
  {
    title: "Haarschnitt",
    price: "20 €",
    description: "Der Klassiker — schnell und präzise.",
    features: [
      "Beratung zum Wunsch-Look",
      "Schnitt mit Maschine & Schere",
      "Styling zum Abschluss",
    ],
    cta: "Termin anrufen",
    href: "tel:+4915736594872",
  },
  {
    title: "Haarschnitt + Bart",
    price: "30 €",
    description: "Das Komplett-Programm für oben und unten.",
    features: [
      "Kompletter Haarschnitt",
      "Bartschnitt mit sauberer Kontur",
      "Pflege & Finish",
    ],
    cta: "Termin anrufen",
    href: "tel:+4915736594872",
    featured: true,
  },
  {
    title: "Komplett-Paket",
    price: "38 €",
    description: "Alles neu: Haare, Bart, Augenbrauen.",
    features: [
      "Haarschnitt + Bart komplett",
      "Augenbrauen mit Fadentechnik",
      "Styling & Pflegeprodukte",
    ],
    cta: "Termin anrufen",
    href: "tel:+4915736594872",
  },
];

export default function Pricing() {
  return (
    <section className="py-16 md:py-24" id="leistungen">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 p-6 text-center sm:p-8">
        <h2 className="font-display text-5xl tracking-wide md:text-6xl">
          Leistungen & Preise
        </h2>
        <p className="text-lg text-muted-foreground md:text-xl">
          Klare Preise, kein Rätselraten — du weißt vorher, was es kostet.
        </p>
        <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold text-primary">
          Demo-Entwurf: Beispielpreise — die echten Preise legt Murat fest
        </span>

        <div className="mt-6 grid w-full grid-cols-1 gap-6 min-[900px]:grid-cols-3">
          {pricingData.map((plan) => (
            <PricingCard key={plan.title} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan }: { plan: PricingCardProps }) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-lg border bg-card p-6 text-left",
        plan.featured && "border-primary shadow-sm ring-1 ring-primary/20",
      )}
      aria-label={`${plan.title}`}
    >
      <div className="text-center">
        <div className="inline-flex items-center gap-2">
          <Badge variant={plan.featured ? "default" : "secondary"}>
            {plan.title}
          </Badge>
          {plan.featured && (
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
              Beliebt
            </span>
          )}
        </div>
        <h4 className="font-display mt-4 mb-2 text-4xl text-primary">
          {plan.price}
        </h4>
        {plan.description && (
          <p className="text-sm opacity-70">{plan.description}</p>
        )}
      </div>

      <div className="my-4 border-t" />

      <ul className="space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center text-sm opacity-80">
            <CircleCheck
              className="mr-2 h-4 w-4 shrink-0 text-primary"
              aria-hidden
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <a href={plan.href}>
          <Button
            size="sm"
            className="w-full"
            variant={plan.featured ? "default" : "secondary"}
          >
            {plan.cta}
          </Button>
        </a>
      </div>
    </div>
  );
}
