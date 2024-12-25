import { UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";
import { isUniqueAcrossAllDocuments } from "../lib/isUniqueAcrossAllDocuments";


export const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "id",
      type: "number",
    }),
    defineField({
      name: "name",
      type: "string",
      validation: (Rule) =>
        Rule.min(3).max(20).required().error("Please enter your name"),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name",
        isUnique: isUniqueAcrossAllDocuments,
      },
    }),
    defineField({
      name: "username",
      type: "string",
      validation: (Rule) =>
        Rule.min(3).max(20).required().error("Please enter your user name"),
    }),
    defineField({
      name: "email",
      type: "string",
      validation: (Rule) =>
        Rule.min(3).max(20).required().error("Please enter your name"),
    }),
    defineField({
      name: "image",
      type: "image",
    }),
    defineField({
      name: "bio",
      type: "text",
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
  },
});
