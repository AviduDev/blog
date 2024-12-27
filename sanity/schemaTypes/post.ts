import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required().error("Please enter your name"),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required().error("Please enter your name"),
    }),
    defineField({
      name: "author",
      type: "reference",
      to: {
        type: "author",
      },
      validation: (Rule) => Rule.required().error("Please enter your name"),
    }),
    defineField({
      name: "category",
      type: "string",
      validation: (Rule) => Rule.required().error("Please enter your name"),
    }),
    defineField({
      name: "views",
      type: "number",
      validation: (Rule) => Rule.required().error("Please enter your name"),
    }),
    defineField({
      name: "description",
      type: "text",
      validation: (Rule) => Rule.required().error("Please enter your name"),
    }),
    defineField({
      name: "image",
      type: "image",
      validation: (Rule) => Rule.required().error("Please enter your name"),
    }),
    defineField({
      name: "content",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required().error("Please enter your name"),
    }),
  ],
});
