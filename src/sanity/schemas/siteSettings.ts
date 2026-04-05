import { defineField, defineType } from "sanity";
import { CogIcon } from "@sanity/icons";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      name: "phone",
      title: "Office Phone",
      type: "string",
      initialValue: "416.740.5617",
    }),
    defineField({
      name: "cell",
      title: "Cell Phone",
      type: "string",
      initialValue: "416.567.8193",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      initialValue: "kwame@royalafricantravel.ca",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "text",
      rows: 2,
      initialValue:
        "Elmhurst Plaza, 2428 Islington Ave., Suite 205, Toronto, ON M9W 3X8",
    }),
    defineField({
      name: "businessHours",
      title: "Business Hours",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "days", title: "Days", type: "string" },
            { name: "hours", title: "Hours", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "socialLinks",
      title: "Social Media Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "platform",
              title: "Platform",
              type: "string",
              options: {
                list: [
                  "Facebook",
                  "Instagram",
                  "Twitter",
                  "LinkedIn",
                  "YouTube",
                ],
              },
            },
            { name: "url", title: "URL", type: "url" },
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
