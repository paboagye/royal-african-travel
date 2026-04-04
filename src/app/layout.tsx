import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Royal African Travel & Cargo | Africa Travel Specialists in Toronto",
    template: "%s | Royal African Travel & Cargo",
  },
  description:
    "TICO-registered travel agency in Toronto specializing in flights, cargo, and vacation packages to Africa. Over 20 years of experience. Call 416.740.5617.",
  metadataBase: new URL("https://www.royalafricantravel.ca"),
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Royal African Travel & Cargo",
  },
};

// Static JSON-LD structured data — no user input, safe to inline
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["TravelAgency", "LocalBusiness"],
  name: "Royal African Travel & Cargo",
  description:
    "TICO-registered travel agency in Toronto specializing in flights, cargo, and vacation packages to Africa.",
  url: "https://www.royalafricantravel.ca",
  telephone: "+1-416-740-5617",
  email: "kwame@royalafricantravel.ca",
  founder: {
    "@type": "Person",
    name: "Kwame Agyemang",
  },
  foundingDate: "2006",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2428 Islington Ave., Suite 205",
    addressLocality: "Toronto",
    addressRegion: "ON",
    postalCode: "M9W 3X8",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.7194,
    longitude: -79.5277,
  },
  areaServed: [
    { "@type": "Country", name: "Ghana" },
    { "@type": "Country", name: "Nigeria" },
    { "@type": "Country", name: "South Africa" },
    { "@type": "Country", name: "Kenya" },
    { "@type": "Continent", name: "Africa" },
  ],
  priceRange: "$$",
  currenciesAccepted: "CAD",
  paymentAccepted: "Cash, Credit Card",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <script
          type="application/ld+json"
          // Safe: jsonLd is a compile-time constant with no user input
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-primary focus:text-primary-foreground"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
