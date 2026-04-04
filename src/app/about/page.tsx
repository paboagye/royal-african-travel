import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Globe,
  Users,
  Plane,
  Package,
  Heart,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Royal African Travel & Cargo was founded in 2006 by Kwame Agyemang — an experienced travel consultant with over 20 years in the industry. TICO registered #50015070.",
  openGraph: {
    title: "About Us | Royal African Travel & Cargo",
    description:
      "Learn about our 20+ years of experience helping Canadians travel to Africa. TICO registered for your protection.",
    url: "/about",
  },
};

const milestones = [
  {
    year: "2006",
    title: "Founded in Toronto",
    description:
      "Kwame Agyemang established Royal African Travel & Cargo to serve the growing African diaspora in Canada.",
  },
  {
    year: "2008",
    title: "TICO Registration",
    description:
      "Became a fully registered member of the Travel Industry Council of Ontario (#50015070).",
  },
  {
    year: "2012",
    title: "Expanded Services",
    description:
      "Added air cargo services to meet the growing demand for shipping to African countries.",
  },
  {
    year: "Today",
    title: "20+ Years Strong",
    description:
      "Continuing to serve families, businesses, and travellers with the best deals to Africa.",
  },
];

const strengths = [
  {
    icon: Globe,
    title: "Africa Expertise",
    description:
      "Deep knowledge of destinations across West, East, and Southern Africa — we know the routes, the airlines, and the best deals.",
  },
  {
    icon: Users,
    title: "Personalized Service",
    description:
      "Every trip is tailor-made. We take the time to understand your needs and budget to craft the perfect itinerary.",
  },
  {
    icon: Heart,
    title: "Community Focused",
    description:
      "Proudly serving the Canadian African diaspora — whether you're visiting family, attending a celebration, or exploring.",
  },
  {
    icon: Package,
    title: "Cargo Services",
    description:
      "We arrange air cargo shipments to any African country for clients who need to send bulk goods by air.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-brand-gold">
              About Us
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Your Trusted Partner for Travel to Africa
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Royal African Travel & Cargo was founded in 2006 by Kwame
              Agyemang, an experienced travel consultant who has worked in the
              travel industry for over 20 years.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              We are a proud member of the Travel Industry Council of Ontario
              (TICO Registration #50015070). As a full service Travel Agency
              based in Toronto, Ontario, we are the Canadian specialist for
              travellers planning vacations to Africa.
            </p>
            <p>
              We specialize in planning, booking, and implementing your
              tailor-made vacation! Whether you are planning a trip back to visit
              family or the vacation of a lifetime, we will make your plans
              reality!
            </p>
            <p>
              If you are travelling to Africa or any part of the world, our
              friendly and respectful staff take the time to make the best plans
              for your travel needs. We are always upfront with our customers and
              you can be confident that what we quote you is the best price for
              your unique travel needs.
            </p>
            <p>
              We also arrange Air Cargo Services to any African Country for
              clients who need to send bulk shipments by air.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-y bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Why Choose Royal African Travel?
            </h2>
            <p className="mt-3 text-muted-foreground">
              What sets us apart from the rest
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                  <item.icon className="size-7" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">Our Journey</h2>
            <p className="mt-3 text-muted-foreground">
              Two decades of helping Canadians travel to Africa
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-2xl">
            <div className="relative space-y-8 border-l-2 border-brand-red/20 pl-8">
              {milestones.map((item) => (
                <div key={item.year} className="relative">
                  <div className="absolute -left-[calc(2rem+5px)] flex size-3 items-center justify-center rounded-full bg-brand-red ring-4 ring-background" />
                  <p className="text-sm font-semibold text-brand-red">
                    {item.year}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TICO Trust Section */}
      <section className="border-t bg-brand-green/5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
              <ShieldCheck className="size-8" aria-hidden="true" />
            </div>
            <h2 className="mt-6 text-2xl font-bold tracking-tight">
              TICO Registered for Your Protection
            </h2>
            <p className="mt-4 text-muted-foreground">
              As a registered member of the Travel Industry Council of Ontario
              (Registration #50015070), we are required to meet industry
              standards and participate in the Ontario Travel Compensation Fund —
              giving you peace of mind when you book with us.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              TICO is a regulatory body that administers Ontario&apos;s Travel
              Industry Act, protecting consumers who purchase travel services.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-red py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to start planning?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Contact us today for a free consultation. We&apos;ll find the best
            flights and packages for your trip to Africa.
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
              <Phone className="size-4" aria-hidden="true" />
              416.740.5617
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
