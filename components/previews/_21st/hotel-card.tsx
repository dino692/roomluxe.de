// 21st.dev: @lavikatiyar/card — Hotel Card (horizontal, image+content)
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export interface HotelCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  imageAlt: string;
  roomType: string;
  hotelName: string;
  location: string;
  rating: number;
  reviewCount: number;
  href?: string;
  priceLabel?: string;
}

export const HotelCard = React.forwardRef<HTMLDivElement, HotelCardProps>(
  ({ className, imageUrl, imageAlt, roomType, hotelName, location, rating, reviewCount, href, priceLabel, ...props }, ref) => {
    const Component: any = href ? motion.a : motion.div;
    return (
      <Component
        ref={ref as any}
        href={href}
        className={cn("group flex flex-col md:flex-row overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg", className)}
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300 }}
        {...props}
      >
        <div className="md:w-2/5 w-full h-56 md:h-auto overflow-hidden">
          <img src={imageUrl} alt={imageAlt} className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />
        </div>
        <div className="flex flex-col justify-center p-6 md:w-3/5 space-y-2">
          <span className="text-sm text-muted-foreground">{roomType}</span>
          <h3 className="text-2xl font-bold tracking-tight">{hotelName}</h3>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="mr-2 h-4 w-4 flex-shrink-0" />
            <span>{location}</span>
          </div>
          <div className="flex items-center pt-2 text-muted-foreground">
            <Star className="mr-2 h-4 w-4 fill-primary text-primary" />
            <span className="font-semibold text-foreground">{rating.toFixed(1)}</span>
            <span className="ml-1.5">({reviewCount.toLocaleString("de-DE")} Bewertungen)</span>
          </div>
          {priceLabel && (
            <div className="pt-2 text-foreground font-semibold">{priceLabel}</div>
          )}
        </div>
      </Component>
    );
  },
);
HotelCard.displayName = "HotelCard";
