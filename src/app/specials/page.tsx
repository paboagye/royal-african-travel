import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PromotionCard } from "@/components/promotion-card";
import { getActivePromotions, type Promotion } from "@/content/promotions";
import { Phone, Tag } from "lucide-react";
import { sanityFetch } from "@/lib/sanity-fetch";
import { promotionsQuery } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Specials & Promotions",
  description:
    "Check out our latest travel specials and promotions to Africa. Book early and save on flights to Ghana, Nigeria, South Africa, and more.",
  openGraph: {
    title: "Specials & Promotions | Royal African Travel & Cargo",
    description:
      "Latest deals on flights and vacation packages to Africa. Limited time offers — book early and save!",
    url: "/specials",
  },
};

export default async function SpecialsPage() {
  // Fetch from Sanity (auto-filters expired via GROQ), fall back to static
  const sanityPromos = await sanityFetch<
    {
      _id: string;
      destination: string;
      from: string;
      price: string;
      priceNote: string;
      validFrom: string;
      validTo: string;
      description: string;
      image?: { asset: { _ref: string } };
    }[]
  >(promotionsQuery);

  const activePromotions: Promotion[] = sanityPromos
    ? sanityPromos.map((p) => ({
        id: p._id,
        destination: p.destination,
        from: p.from,
        price: p.price,
        priceNote: p.priceNote,
        validFrom: p.validFrom,
        validTo: p.validTo,
        description: p.description,
        image: p.image ? urlFor(p.image).width(800).height(500).url() : undefined,
      }))
    : getActivePromotions();

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-brand-gold">
              Specials & Promotions
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Book Early and Save
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              The dedicated staff at Royal African Travel & Cargo are constantly
              on the lookout for the best deals. Check out our current specials
              below!
            </p>
          </div>
        </div>
      </section>

      {/* Promotions Grid or Empty State */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {activePromotions.length > 0 ? (
            <>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {activePromotions.map((promo) => (
                  <PromotionCard key={promo.id} promo={promo} />
                ))}
              </div>
              <p className="mt-8 text-center text-sm text-muted-foreground">
                Prices are subject to availability and may change without
                notice. Contact us for the most up-to-date fares.
              </p>
            </>
          ) : (
            <div className="mx-auto max-w-md text-center">
              <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-brand-gold/10 text-brand-gold">
                <Tag className="size-8" aria-hidden="true" />
              </div>
              <h2 className="mt-6 text-2xl font-bold">
                No Current Specials
              </h2>
              <p className="mt-3 text-muted-foreground">
                We&apos;re working on new deals right now. Contact us directly
                and we&apos;ll find the best fare for your trip — we always have
                access to competitive rates.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button render={<Link href="/contact" />}>
                  Contact Us for a Quote
                </Button>
                <Button
                  variant="outline"
                  render={<a href="tel:+14167405617" />}
                >
                  <Phone className="size-4" aria-hidden="true" />
                  416.740.5617
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Always-visible CTA */}
      <section className="bg-brand-red py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">
            Don&apos;t see what you&apos;re looking for?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Give us a call and let us build you a unique itinerary. We
            accommodate all levels of budgets and can find deals not listed here.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-brand-red hover:bg-white/90"
              render={<Link href="/contact" />}
            >
              Request a Custom Quote
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="border border-white/40 text-white hover:bg-white/10 hover:text-white"
              render={<a href="tel:+14167405617" />}
            >
              <Phone className="size-4" aria-hidden="true" />
              416.740.5617
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
