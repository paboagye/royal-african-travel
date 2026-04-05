import { groq } from "next-sanity";

export const heroSlidesQuery = groq`
  *[_type == "heroSlide"] | order(order asc) {
    _id,
    image,
    alt,
    headline,
    subheadline,
    ctaLabel,
    ctaHref
  }
`;

export const destinationsQuery = groq`
  *[_type == "destination" && featured == true] | order(order asc) {
    _id,
    name,
    description,
    image
  }
`;

export const promotionsQuery = groq`
  *[_type == "promotion" && validTo >= now()] | order(validFrom asc) {
    _id,
    destination,
    from,
    price,
    priceNote,
    validFrom,
    validTo,
    description,
    image
  }
`;

export const servicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    description,
    iconName
  }
`;

export const airlinePartnersQuery = groq`
  *[_type == "airlinePartner"] | order(order asc) {
    _id,
    name,
    color
  }
`;

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    phone,
    cell,
    email,
    address,
    businessHours[] {
      days,
      hours
    },
    socialLinks[] {
      platform,
      url
    }
  }
`;
