import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/service-card";
import {
  Plane,
  Package,
  Users,
  Hotel,
  Car,
  ShieldPlus,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-service travel agency offering flight bookings, air cargo to Africa, group vacations, hotel bookings, car rentals, and travel insurance. TICO registered.",
  openGraph: {
    title: "Our Services | Royal African Travel & Cargo",
    description:
      "Flights, air cargo, vacations, hotels, car rentals, and travel insurance — everything you need for your trip to Africa.",
    url: "/services",
  },
};

const services = [
  {
    icon: Plane,
    title: "Flight Bookings",
    description:
      "We specialize in finding you the best airfare deals. Our team thoroughly researches the best available routes and airlines to match your schedule and budget.",
  },
  {
    icon: Package,
    title: "Air Cargo Services",
    description:
      "Need to send bulk shipments to Africa? We arrange air cargo to any African country — our agents will help with all your cargo requirements.",
  },
  {
    icon: Users,
    title: "Group & Family Vacations",
    description:
      "Let us develop a customized vacation itinerary for your family or group — including airfare, hotel bookings, car rentals, and special event arrangements.",
  },
  {
    icon: Hotel,
    title: "Hotel Bookings",
    description:
      "From budget-friendly stays to luxury resorts, we book accommodations across Africa that match your preferences and travel style.",
  },
  {
    icon: Car,
    title: "Car Rentals",
    description:
      "Explore your destination with the freedom of a rental car. We arrange reliable car rentals at competitive rates across African destinations.",
  },
  {
    icon: ShieldPlus,
    title: "Travel & Medical Insurance",
    description:
      "Protect your vacation investment with travel, medical, and cancellation insurance. We source the best coverage from leading providers.",
  },
];

const airlinePartners = [
  { name: "KLM", color: "bg-[#00A1DE]" },
  { name: "British Airways", color: "bg-[#075AAA]" },
  { name: "Lufthansa", color: "bg-[#05164D]" },
  { name: "Ethiopian Airlines", color: "bg-[#4A8C2A]" },
  { name: "South African Airways", color: "bg-[#002855]" },
  { name: "Kenya Airways", color: "bg-[#C8102E]" },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-brand-gold">
              Our Services
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Everything You Need for Your Trip to Africa
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Royal African Travel & Cargo is a full service travel agency
              offering flights, cargo, vacations, and more. Based in Toronto, we
              serve clients locally and across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Airline Partners */}
      <section className="border-y bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Airline Partners
            </h2>
            <p className="mt-3 text-muted-foreground">
              We work with leading airlines to get you the best routes and fares
              to Africa
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {airlinePartners.map((airline) => (
              <div
                key={airline.name}
                className="flex h-20 items-center justify-center rounded-lg border bg-card px-4 shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`size-3 shrink-0 rounded-full ${airline.color}`}
                  />
                  <span className="text-center text-sm font-medium text-foreground">
                    {airline.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            We also book with many other airlines depending on routes and
            availability.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-red py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">
            Need a quote for your trip?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Tell us where you want to go and we&apos;ll find the best options
            for your budget. No obligation, no pressure — just expert advice.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-brand-red hover:bg-white/90"
              render={<Link href="/contact" />}
            >
              Get a Free Quote
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
