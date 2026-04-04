import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";
import type { Promotion } from "@/content/promotions";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-CA", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function PromotionCard({ promo }: { promo: Promotion }) {
  return (
    <div className="group overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-md">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-brand-navy/5">
        {promo.image ? (
          <Image
            src={promo.image}
            alt={promo.destination}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-muted-foreground/30">
            <MapPin className="size-12" aria-hidden="true" />
          </div>
        )}
        <Badge className="absolute left-3 top-3 bg-brand-red text-white hover:bg-brand-red">
          Special Offer
        </Badge>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold">{promo.destination}</h3>
            <p className="text-sm text-muted-foreground">
              From {promo.from}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-brand-red">{promo.price}</p>
            <p className="text-xs text-muted-foreground">{promo.priceNote}</p>
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {promo.description}
        </p>

        <div className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
          <CalendarDays className="size-3.5" aria-hidden="true" />
          <span>
            Valid: {formatDate(promo.validFrom)} — {formatDate(promo.validTo)}
          </span>
        </div>

        <Button
          className="mt-4 w-full"
          render={<Link href="/contact" />}
          aria-label={`Enquire about ${promo.destination} deal`}
        >
          Enquire About This Deal
        </Button>
      </div>
    </div>
  );
}
