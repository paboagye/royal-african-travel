import { defineField, defineType } from "sanity";
import { TagIcon } from "@sanity/icons";

export const promotion = defineType({
  name: "promotion",
  title: "Promotion",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "destination",
      title: "Destination",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "from",
      title: "Departing From",
      type: "string",
      initialValue: "Toronto",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "string",
      description: 'e.g. "from $899"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "priceNote",
      title: "Price Note",
      type: "string",
      initialValue: "+ taxes & fees",
    }),
    defineField({
      name: "validFrom",
      title: "Valid From",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "validTo",
      title: "Valid To",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { title: "destination", subtitle: "price", media: "image" },
  },
});
