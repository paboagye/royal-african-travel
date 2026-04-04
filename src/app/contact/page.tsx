import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Royal African Travel & Cargo for flight bookings, cargo services, and vacation packages to Africa. Office: 416.740.5617. Located at Elmhurst Plaza, Toronto.",
  openGraph: {
    title: "Contact Us | Royal African Travel & Cargo",
    description:
      "Get in touch for a free quote on flights and travel packages to Africa. Call 416.740.5617 or send us a message.",
    url: "/contact",
  },
};

interface ContactLine {
  text: string;
  subtext?: string;
  href?: string;
}

const contactInfo: {
  icon: typeof Phone;
  label: string;
  lines: ContactLine[];
}[] = [
  {
    icon: Phone,
    label: "Phone",
    lines: [
      { text: "416.740.5617", subtext: "Office", href: "tel:+14167405617" },
      { text: "416.567.8193", subtext: "Cell", href: "tel:+14165678193" },
    ],
  },
  {
    icon: Mail,
    label: "Email",
    lines: [
      {
        text: "kwame@royalafricantravel.ca",
        href: "mailto:kwame@royalafricantravel.ca",
      },
    ],
  },
  {
    icon: MapPin,
    label: "Address",
    lines: [
      {
        text: "Elmhurst Plaza, 2428 Islington Ave., Suite 205",
      },
      {
        text: "Toronto, ON M9W 3X8",
      },
    ],
  },
  {
    icon: Clock,
    label: "Hours",
    lines: [
      { text: "Monday – Friday: 9:00 AM – 6:00 PM" },
      { text: "Saturday: By appointment" },
      { text: "Sunday: Closed" },
    ],
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-brand-gold">
              Contact Us
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Ready to plan your trip? Send us a message or give us a call —
              we&apos;re here to help you find the best deals to Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold tracking-tight">
                Send Us a Message
              </h2>
              <p className="mt-2 text-muted-foreground">
                Fill out the form below and we&apos;ll get back to you within 24
                hours.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold tracking-tight">
                Contact Information
              </h2>
              <p className="mt-2 text-muted-foreground">
                Prefer to reach us directly? Here&apos;s how.
              </p>

              <div className="mt-8 space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
                      <item.icon className="size-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{item.label}</p>
                      {item.lines.map((line, i) => (
                        <p key={i} className="text-sm text-muted-foreground">
                          {line.href ? (
                            <a
                              href={line.href}
                              className="rounded transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            >
                              {line.text}
                            </a>
                          ) : (
                            line.text
                          )}
                          {"subtext" in line && line.subtext && (
                            <span className="ml-1 text-xs text-muted-foreground/60">
                              ({line.subtext})
                            </span>
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight">Find Us</h2>
          <p className="mt-2 text-muted-foreground">
            Elmhurst Plaza, 2428 Islington Ave., Suite 205, Toronto, ON M9W 3X8
          </p>
          <div className="mt-6 overflow-hidden rounded-xl border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.4!2d-79.5277!3d43.7194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3a5c0b5b1b1b%3A0x1b1b1b1b1b1b1b1b!2s2428%20Islington%20Ave%2C%20Etobicoke%2C%20ON%20M9W%203X8!5e0!3m2!1sen!2sca!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Royal African Travel & Cargo office location"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
