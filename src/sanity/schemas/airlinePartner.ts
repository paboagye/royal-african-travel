import { defineField, defineType } from "sanity";
import { RocketIcon } from "@sanity/icons";

export const airlinePartner = defineType({
  name: "airlinePartner",
  title: "Airline Partner",
  type: "document",
  icon: RocketIcon,
  fields: [
    defineField({
      name: "name",
      title: "Airline Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "color",
      title: "Brand Color (hex)",
      type: "string",
      description: 'e.g. "#00A1DE" for KLM blue',
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
  preview: {
    select: { title: "name" },
  },
});
