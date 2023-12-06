import { defineType } from "sanity";

import {
  authorField,
  bodyField,
  categoriesField,
  imageField,
  publishedAtField,
  slugField,
  stringField,
} from "./commonFields";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    stringField({ name: "title", title: "Title" }),
    slugField("title"),
    stringField({ name: "excerpt", title: "Excerpt" }),
    authorField,
    imageField({ name: "mainImage", title: "Main Image" }),
    categoriesField("category"),
    publishedAtField,
    bodyField,
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
