"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Service } from "@/lib/servicesData";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";

type StickyServiceCardProps = {
  service: Service;
  index: number;
  topOffsetPx: number; // computed as stickyTopPx + index * gapPx
  className?: string;
};

function AbstractBits({ variant = 0 }: { variant: number }) {
  // Three subtle abstract variants—no gradients, only shapes using tokens.
  const common = "pointer-events-none select-none opacity-70";
  if (variant % 3 === 0) {
    // Corner dots
    return (
      <motion.div
        aria-hidden
        className={cn("absolute right-4 top-4 grid grid-cols-4 gap-2", common)}
        initial={{ opacity: 0, y: -6 }}
        whileInView={{ opacity: 0.25, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="size-1.5 rounded-full bg-primary/30"
            aria-hidden
          />
        ))}
      </motion.div>
    );
  }
  if (variant % 3 === 1) {
    // Orbit ring
    return (
      <motion.div
        aria-hidden
        className={cn("absolute -left-6 -top-6", common)}
        initial={{ scale: 0.9, rotate: -8, opacity: 0 }}
        whileInView={{ scale: 1, rotate: 0, opacity: 0.25 }}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
      >
        <div className="relative">
          <div className="size-24 rounded-full border-2 border-primary/30" />
          <div className="absolute inset-0 m-auto size-2 rounded-full bg-primary/30 translate-x-9 -translate-y-10" />
        </div>
      </motion.div>
    );
  }
  // Pluses
  return (
    <motion.div
      aria-hidden
      className={cn("absolute bottom-6 right-6", common)}
      initial={{ opacity: 0, x: 8 }}
      whileInView={{ opacity: 0.25, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex gap-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="relative size-4 text-primary/50">
            <span className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-primary/50" />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-px w-full bg-primary/50" />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function StickyServiceCard({
  service,
  index,
  topOffsetPx,
  className,
}: StickyServiceCardProps) {
  const Icon = service.icon;
  return (
    <motion.div
      layout
      className={cn("sticky z-10 will-change-transform", className)}
      style={{ top: `${topOffsetPx}px` }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20% 0px -10% 0px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Card className="relative overflow-hidden border hover:border-primary transition-all bg-card text-card-foreground group">
        <Link to={`/services/${service.id}`} className="p-4 sm:p-8 block">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 md:bg-foreground/5 group-hover:bg-primary/10 text-primary md:text-foreground/50 group-hover:text-primary transition-all">
              <Icon className="size-6" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                {service.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                {service.pricing}
              </p>
            </div>
          </div>

          <p className="mb-4 text-pretty text-muted-foreground text-sm md:text-lg">
            {service.description}
          </p>
          <p className="mb-4 md:mb-6 text-pretty text-sm md:text-lg hidden md:block">
            {service.fullDescription}
          </p>

          <div className="mb-6 hidden md:flex flex-wrap gap-2">
            {service.features.slice(0, 4).map((f) => (
              <Badge key={f} variant="secondary" className="rounded-full">
                {f}
              </Badge>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="mb-2 text-xs md:text-sm font-medium text-muted-foreground">
                Benefits
              </p>
              <ul className="list-inside list-disc space-y-1 text-sm md:text-base">
                {service.benefits.slice(0, 4).map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
            <div className="hidden md:block">
              <p className="mb-2 text-sm font-medium text-muted-foreground">
                Process
              </p>
              <ol className="space-y-1 ">
                {service.process.slice(0, 4).map((step, i) => (
                  <li key={step} className="flex items-start gap-2">
                    <span className="mt-0.5 inline-flex size-5 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between underline-offset-4 hover:underline text-primary md:text-foreground group-hover:text-primary transition-all">
            <Link
              to={`/services/${service.id}`}
              className=" flex gap-1 justify-center items-center"
            >
              <span className="sr-only">Learn more about {service.title}</span>
              <span aria-hidden>Learn more</span>
              <ChevronRight className="size-6" />
            </Link>
          </div>
        </Link>

        <AbstractBits variant={index} />
      </Card>
    </motion.div>
  );
}
