import Link from "next/link";
import { Phone, Mail, MapPin, Plane, ShieldCheck } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { navLinks } from "@/lib/nav";

export function Footer() {
  return (
    <footer className="mt-auto bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex size-9 items-center justify-center rounded-full bg-brand-red text-white">
                <Plane className="size-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold leading-tight">
                  Royal African
                </span>
                <span className="text-xs leading-tight text-secondary-foreground/70">
                  Travel & Cargo
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-secondary-foreground/80">
              Your trusted Canadian specialist for travel to Africa. Over 20
              years of experience planning tailor-made vacations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary-foreground/60">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/80 transition-colors hover:text-brand-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary-foreground/60">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-secondary-foreground/80">
              <li>
                <a
                  href="tel:+14167405617"
                  className="flex items-start gap-2 transition-colors hover:text-brand-gold"
                >
                  <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  <span>
                    416.740.5617
                    <span className="block text-xs text-secondary-foreground/50">
                      Office
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+14165678193"
                  className="flex items-start gap-2 transition-colors hover:text-brand-gold"
                >
                  <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  <span>
                    416.567.8193
                    <span className="block text-xs text-secondary-foreground/50">
                      Cell
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:kwame@royalafricantravel.ca"
                  className="flex items-center gap-2 transition-colors hover:text-brand-gold"
                >
                  <Mail className="size-4 shrink-0" aria-hidden="true" />
                  kwame@royalafricantravel.ca
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span>
                  Elmhurst Plaza, 2428 Islington Ave.,
                  <br />
                  Suite 205, Toronto, ON M9W 3X8
                </span>
              </li>
            </ul>
          </div>

          {/* TICO Trust Badge */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary-foreground/60">
              Certified & Trusted
            </h3>
            <div className="rounded-lg border border-secondary-foreground/10 bg-secondary-foreground/5 p-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-6 text-brand-green" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold">TICO Registered</p>
                  <p className="text-xs text-secondary-foreground/60">
                    Registration #50015070
                  </p>
                </div>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-secondary-foreground/60">
                Travel Industry Council of Ontario — your protection when you
                travel.
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-secondary-foreground/10" />

        <div className="flex flex-col items-center justify-between gap-2 text-xs text-secondary-foreground/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Royal African Travel & Cargo. All
            rights reserved.
          </p>
          <p>
            Designed by{" "}
            <span className="font-medium text-secondary-foreground/70">
              Danipa
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
