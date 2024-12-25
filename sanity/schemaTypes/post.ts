import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "author",
      type: "reference",
      to: {
        type: "author",
      },
    }),
    defineField({
      name: "category",
      type: "string",
    }),
    defineField({
      name: "views",
      type: "number",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "image",
      type: "image",
    }),
    defineField({
      name: "content",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});