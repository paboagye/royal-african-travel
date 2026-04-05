import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroCarousel } from "@/components/hero-carousel";
import { DestinationCard } from "@/components/destination-card";
import { Plane, ShieldCheck, Globe } from "lucide-react";
import { sanityFetch } from "@/lib/sanity-fetch";
import { destinationsQuery } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";

export const metadata: Metadata = {
  title:
    "Royal African Travel & Cargo | Africa Travel Specialists in Toronto",
  description:
    "TICO-registered travel agency in Toronto specializing in flights, cargo, and vacation packages to Africa. Over 20 years of experience. Call 416.740.5617.",
  openGraph: {
    title: "Royal African Travel & Cargo | Africa Travel Specialists",
    description:
      "Your trusted Canadian specialist for travel to Africa. Flights, cargo, vacations — over 20 years of experience.",
    url: "/",
  },
};

const destinations = [
  {
    name: "Accra, Ghana",
    description:
      "Visit the vibrant capital — Kwame Nkrumah Memorial, Makola Market, and beautiful beaches along the Gulf of Guinea.",
    image: "/images/destinations/ghana.jpg",
  },
  {
    name: "Lagos, Nigeria",
    description:
      "Experience the energy of Africa's largest city — a thriving business hub with rich culture and vibrant nightlife.",
    image: "/images/destinations/nigeria.jpg",
  },
  {
    name: "Johannesburg, South Africa",
    description:
      "Discover the Rainbow Nation — Apartheid Museum, world-class safaris, Table Mountain, and fine dining.",
    image: "/images/destinations/south-africa.jpg",
  },
];

const valueProps = [
  {
    icon: Globe,
    title: "20+ Years Experience",
    description:
      "Serving the Canadian African diaspora since 2006 with expert knowledge and personalized service.",
    color: "bg-brand-red/10 text-brand-red",
  },
  {
    icon: ShieldCheck,
    title: "TICO Registered",
    description:
      "Fully registered with the Travel Industry Council of Ontario (#50015070) for your protection.",
    color: "bg-brand-green/10 text-brand-green",
  },
  {
    icon: Plane,
    title: "Africa Specialists",
    description:
      "From Ghana to South Africa, Nigeria to Kenya — we know Africa and will find you the best deals.",
    color: "bg-brand-navy/10 text-brand-navy",
  },
];

export default async function Home() {
  // Fetch destinations from Sanity, fall back to static data
  const sanityDestinations = await sanityFetch<
    { _id: string; name: string; description: string; image?: { asset: { _ref: string } } }[]
  >(destinationsQuery);

  const resolvedDestinations = sanityDestinations
    ? sanityDestinations.map((d) => ({
        name: d.name,
        description: d.description,
        image: d.image ? urlFor(d.image).width(800).height(500).url() : undefined,
      }))
    : destinations;

  return (
    <>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Value Props */}
      <section className="border-b bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3">
            {valueProps.map((prop) => (
              <div
                key={prop.title}
                className="flex flex-col items-center text-center"
              >
                <div
                  className={`flex size-14 items-center justify-center rounded-full ${prop.color}`}
                >
                  <prop.icon className="size-7" aria-hidden="true" />
                </div>
                <h2 className="mt-4 text-lg font-semibold">{prop.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Popular Destinations
            </h2>
            <p className="mt-3 text-muted-foreground">
              Explore the best of Africa with our curated travel packages
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resolvedDestinations.map((dest) => (
              <DestinationCard key={dest.name} {...dest} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-red py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to plan your African adventure?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Call us today or send us a message. We accommodate all levels of
            budgets and place the highest priority on your satisfaction.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-brand-red hover:bg-white/90"
              render={<Link href="/contact" />}
            >
              Contact Us
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="border border-white/40 text-white hover:bg-white/10 hover:text-white"
              render={<a href="tel:+14167405617" />}
            >
              <Plane className="size-4" aria-hidden="true" />
              416.740.5617
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
