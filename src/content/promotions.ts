export interface Promotion {
  id: string;
  destination: string;
  from: string;
  price: string;
  priceNote: string;
  validFrom: string; // ISO date
  validTo: string; // ISO date
  description: string;
  image?: string;
}

/**
 * Sample promotions — update with real prices and dates from Kwame before launch.
 * Expired promotions are automatically hidden on the Specials page.
 */
export const promotions: Promotion[] = [
  {
    id: "accra-spring-2026",
    destination: "Accra, Ghana",
    from: "Toronto",
    price: "from $899",
    priceNote: "+ taxes & fees",
    validFrom: "2026-04-01",
    validTo: "2026-06-30",
    description:
      "Book early and save on flights to Accra! Visit the vibrant capital of Ghana — Kwame Nkrumah Memorial, Makola Market, and beautiful coastal beaches.",
    image: "/images/destinations/ghana.jpg",
  },
  {
    id: "lagos-spring-2026",
    destination: "Lagos, Nigeria",
    from: "Toronto",
    price: "from $949",
    priceNote: "+ taxes & fees",
    validFrom: "2026-04-01",
    validTo: "2026-06-30",
    description:
      "Experience the energy of Lagos — Africa's largest city and a thriving business hub. Great fares available for spring and early summer travel.",
    image: "/images/destinations/nigeria.jpg",
  },
  {
    id: "joburg-spring-2026",
    destination: "Johannesburg, South Africa",
    from: "Toronto",
    price: "from $1,099",
    priceNote: "+ taxes & fees",
    validFrom: "2026-04-01",
    validTo: "2026-06-30",
    description:
      "Discover South Africa — from Johannesburg to Cape Town. Safaris, wine country, and world-class dining await.",
    image: "/images/destinations/south-africa.jpg",
  },
];

export function getActivePromotions(date: Date = new Date()): Promotion[] {
  return promotions.filter((promo) => {
    const start = new Date(promo.validFrom);
    const end = new Date(promo.validTo);
    end.setHours(23, 59, 59, 999);
    return date >= start && date <= end;
  });
}
