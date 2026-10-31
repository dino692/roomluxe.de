// 21st.dev: @shadcnspace/card-14 — 3D Flip Card (Perspective Real Estate Card)
"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Bath, BedDouble, Expand, MapPin, Sparkles, Zap, Star } from "lucide-react";

interface PerspectiveFlipCardProps {
  className?: string;
  front: React.ReactNode;
  back: React.ReactNode;
  h?: string;
  w?: string;
}

export function PerspectiveFlipCard({
  className, front, back, h = "h-[500px]", w = "w-full max-w-[360px]",
}: PerspectiveFlipCardProps) {
  return (
    <div className={cn("group/p-card [perspective:2000px]", h, w, className)}>
      <div className={cn("relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover/p-card:[transform:rotateY(180deg)]", "rounded-2xl")}>
        <div className="absolute inset-0 size-full rounded-2xl border bg-card text-card-foreground [transform-style:preserve-3d] [backface-visibility:hidden]">
          <div className="size-full [transform-style:preserve-3d] p-3">{front}</div>
        </div>
        <div className="absolute inset-0 size-full rounded-2xl border bg-card text-card-foreground [transform-style:preserve-3d] [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="size-full [transform-style:preserve-3d] p-8 text-center flex flex-col items-center justify-center">
            {back}
          </div>
        </div>
      </div>
    </div>
  );
}

export interface FlipCardFrontProps {
  image: string;
  rating: string;
  reviewLabel: string;
  tagline: string;
  title: string;
  location: string;
}

export function FlipCardFront({ image, rating, reviewLabel, tagline, title, location }: FlipCardFrontProps) {
  return (
    <div className="size-full flex flex-col [transform-style:preserve-3d]">
      <div className="relative h-64 w-full [transform-style:preserve-3d] [transform:translateZ(50px)]">
        <div className="absolute inset-0 rounded-xl bg-muted overflow-hidden border border-border/50">
          <img src={image} alt={title} className="h-full w-full object-cover transition duration-700 group-hover/p-card:scale-110" />
        </div>
        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-md border border-border text-[11px] font-medium tracking-tight text-foreground shadow-lg [transform:translateZ(80px)]">
          <Star className="size-3.5 fill-yellow-400 text-yellow-400" />
          <span>{rating} ({reviewLabel})</span>
        </div>
      </div>
      <div className="flex flex-col justify-between flex-grow p-6 py-8 [transform-style:preserve-3d]">
        <div className="space-y-2 [transform-style:preserve-3d] [transform:translateZ(60px)]">
          <div className="flex items-center gap-2 text-primary text-xs font-semibold tracking-wide">
            <Sparkles className="size-4" />
            <span>{tagline}</span>
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-foreground transition duration-300 group-hover/p-card:text-primary leading-tight">{title}</h3>
          <p className="text-[15px] font-medium text-muted-foreground flex items-center gap-1.5 leading-none mt-2">
            <MapPin className="size-4 text-primary" />
            {location}
          </p>
        </div>
        <div className="flex items-center justify-between text-xs font-semibold tracking-wider text-muted-foreground [transform:translateZ(40px)]">
          <span className="group-hover/p-card:text-primary group-hover/p-card:translate-x-1 transition-all">Hover für Details</span>
          <ArrowRight className="size-4 group-hover/p-card:text-primary" />
        </div>
      </div>
    </div>
  );
}

export interface FlipCardBackProps {
  beds: string;
  baths: string;
  area: string;
  headline: string;
  body: string;
  ctaLabel: string;
}

export function FlipCardBack({ beds, baths, area, headline, body, ctaLabel }: FlipCardBackProps) {
  return (
    <div className="size-full flex flex-col items-center justify-center [transform-style:preserve-3d]">
      <div className="mb-10 w-full [transform-style:preserve-3d] flex justify-center gap-4">
        <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-muted/80 border border-border/50 [transform:translateZ(130px)] min-w-[90px] [transform-style:preserve-3d]">
          <div className="p-2 rounded-xl bg-card border border-border text-primary [transform:translateZ(20px)] shadow-sm"><BedDouble className="size-6" /></div>
          <p className="text-[11px] font-bold [transform:translateZ(10px)] tracking-tight">{beds}</p>
        </div>
        <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-muted/80 border border-border/50 [transform:translateZ(160px)] min-w-[90px] [transform-style:preserve-3d]">
          <div className="p-2 rounded-xl bg-card border border-border text-primary [transform:translateZ(25px)] shadow-sm"><Bath className="size-6" /></div>
          <p className="text-[11px] font-bold [transform:translateZ(10px)] tracking-tight">{baths}</p>
        </div>
        <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-muted/80 border border-border/50 [transform:translateZ(130px)] min-w-[90px] [transform-style:preserve-3d]">
          <div className="p-2 rounded-xl bg-card border border-border text-primary [transform:translateZ(20px)] shadow-sm"><Expand className="size-6" /></div>
          <p className="text-[11px] font-bold [transform:translateZ(10px)] tracking-tight">{area}</p>
        </div>
      </div>
      <div className="space-y-3 [transform-style:preserve-3d] px-6">
        <h3 className="text-xl font-bold tracking-tight text-foreground [transform:translateZ(80px)]">{headline}</h3>
        <p className="text-[13px] font-medium text-muted-foreground leading-relaxed [transform:translateZ(40px)] max-w-[280px] mx-auto">{body}</p>
      </div>
      <div className="mt-8 [transform-style:preserve-3d] w-full px-6">
        <button className="h-11 w-full rounded-xl bg-primary text-primary-foreground text-xs font-bold tracking-wider shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)] transition-all hover:scale-[1.03] active:scale-95 [transform:translateZ(100px)]">
          <Zap className="mr-2 size-3.5 inline-block fill-current" />
          {ctaLabel}
        </button>
      </div>
    </div>
  );
}
