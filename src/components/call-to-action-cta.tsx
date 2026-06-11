import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { Phone, MessageCircle } from "lucide-react";

interface CtaCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  title: string;
  description: string;
  phoneHref: string;
  phoneLabel: string;
  whatsappHref: string;
  whatsappLabel: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

const CtaCard = React.forwardRef<HTMLDivElement, CtaCardProps>(
  (
    {
      className,
      imageSrc,
      title,
      description,
      phoneHref,
      phoneLabel,
      whatsappHref,
      whatsappLabel,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden rounded-xl border bg-card text-card-foreground shadow",
          className,
        )}
        {...props}
      >
        <img
          src={imageSrc}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/70" />

        <motion.div
          className="relative z-10 grid h-full grid-cols-1 items-center gap-8 p-8 md:grid-cols-2 md:p-12 lg:p-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-col items-start text-left text-white">
            <motion.h2
              className="font-display text-5xl tracking-wide md:text-6xl"
              variants={itemVariants}
            >
              {title}
            </motion.h2>
            <motion.p
              className="mt-4 max-w-xl text-lg text-neutral-200"
              variants={itemVariants}
            >
              {description}
            </motion.p>
          </div>

          <motion.div
            className="flex w-full flex-col gap-3 sm:flex-row md:justify-end"
            variants={itemVariants}
          >
            <a
              href={phoneHref}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-primary px-8 text-base font-bold text-primary-foreground transition-colors hover:bg-[#e8744f]"
            >
              <Phone className="h-5 w-5" />
              {phoneLabel}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/10 px-8 text-base font-bold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              <MessageCircle className="h-5 w-5" />
              {whatsappLabel}
            </a>
          </motion.div>
        </motion.div>
      </div>
    );
  },
);

CtaCard.displayName = "CtaCard";

export { CtaCard };
