import * as React from "react";
import { cn } from "@/lib/utils";
import { Instagram } from "lucide-react";

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  badgeText?: string;
  badgeHref?: string;
  titleRegular?: string;
  titleGradient?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  bottomImage?: { src: string; alt: string };
  gridOptions?: {
    angle?: number;
    cellSize?: number;
    opacity?: number;
    lineColor?: string;
  };
}

const RetroGrid = ({
  angle = 65,
  cellSize = 60,
  opacity = 0.4,
  lineColor = "#3a3a40",
}) => {
  const gridStyles = {
    "--grid-angle": `${angle}deg`,
    "--cell-size": `${cellSize}px`,
    "--opacity": opacity,
    "--line": lineColor,
  } as React.CSSProperties;

  return (
    <div
      className={cn(
        "pointer-events-none absolute size-full overflow-hidden [perspective:200px]",
        "opacity-[var(--opacity)]",
      )}
      style={gridStyles}
    >
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div className="animate-grid [inset:0%_0px] [margin-left:-200%] [height:300vh] [width:600vw] [transform-origin:100%_0_0] [background-image:linear-gradient(to_right,var(--line)_1px,transparent_0),linear-gradient(to_bottom,var(--line)_1px,transparent_0)] [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent to-90%" />
    </div>
  );
};

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      className,
      badgeText = "Über 7.900 Follower auf Instagram & TikTok",
      badgeHref = "https://www.instagram.com/murat_barber_shop/",
      titleRegular = "Frische Cuts.",
      titleGradient = "Mitten in Bensheim.",
      description = "Haarschnitt, Bart & Augenbrauen — präzise und sauber, vom Team, dem 7.900 Leute folgen. Lammertsgasse 3, direkt in der Altstadt.",
      ctaText = "Jetzt Termin anrufen",
      ctaHref = "tel:+4915736594872",
      bottomImage,
      gridOptions,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={cn("relative", className)} ref={ref} {...props}>
        <div className="absolute top-0 z-[0] h-screen w-screen bg-[radial-gradient(ellipse_35%_60%_at_50%_-10%,rgba(224,98,60,0.22),rgba(13,13,15,0))]" />
        <section className="relative z-1 mx-auto max-w-full">
          <RetroGrid {...gridOptions} />
          <div className="z-10 mx-auto max-w-screen-xl gap-12 px-4 py-24 md:px-8 md:py-28">
            <div className="mx-auto max-w-3xl space-y-5 text-center">
              <a
                href={badgeHref}
                target="_blank"
                rel="noreferrer noopener"
                className="group mx-auto flex w-fit items-center gap-2 rounded-3xl border border-white/10 bg-gradient-to-tr from-zinc-300/10 via-zinc-400/10 to-transparent px-5 py-2 text-sm text-zinc-300 transition-colors hover:border-primary/40 hover:text-zinc-100"
              >
                <Instagram className="h-4 w-4 text-primary" />
                {badgeText}
              </a>
              <h1 className="font-display mx-auto text-6xl tracking-wide text-balance sm:text-7xl md:text-8xl">
                <span className="bg-[linear-gradient(180deg,#fff_0%,rgba(255,255,255,0.55)_100%)] bg-clip-text text-transparent">
                  {titleRegular}
                </span>{" "}
                <span className="bg-gradient-to-r from-primary via-[#f0855f] to-secondary bg-clip-text text-transparent">
                  {titleGradient}
                </span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-zinc-300">
                {description}
              </p>
              <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e0623c_0%,#2e6ca4_50%,#e0623c_100%)]" />
                  <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background text-base font-semibold backdrop-blur-3xl">
                    <a
                      href={ctaHref}
                      className="group inline-flex w-full items-center justify-center rounded-full border-[1px] border-input bg-gradient-to-tr from-zinc-300/10 via-primary/25 to-transparent px-10 py-4 text-center text-white transition-all hover:from-zinc-300/15 hover:via-primary/40 hover:to-transparent sm:w-auto"
                    >
                      📞 {ctaText}
                    </a>
                  </div>
                </span>
              </div>
            </div>
            {bottomImage && (
              <div className="relative z-10 mx-auto mt-20 max-w-4xl px-2">
                <img
                  src={bottomImage.src}
                  alt={bottomImage.alt}
                  loading="eager"
                  className="w-full rounded-xl border border-white/10 shadow-2xl shadow-primary/10"
                />
              </div>
            )}
          </div>
        </section>
      </div>
    );
  },
);
HeroSection.displayName = "HeroSection";

export { HeroSection };
