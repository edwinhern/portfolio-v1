import { defineField } from "sanity";

interface FieldProps {
  name: string;
  title: string;
}

export const stringField = ({ name, title }: FieldProps) =>
  defineField({
    name,
    title,
    type: "string",
  });

export const imageField = ({ name, title }: FieldProps) =>
  defineField({
    name,
    title,
    type: "image",
    options: { hotspot: true },
    fields: [
      {
        name: "alt",
        type: "string",
        title: "Alternative Text",
      },
    ],
  });

export const slugField = (source: string) =>
  defineField({
    name: "slug",
    title: "Slug",
    type: "slug",
    options: {
      source: source,
      maxLength: 96,
    },
  });

export const authorField = defineField({
  name: "author",
  title: "Author",
  type: "reference",
  to: { type: "author" },
});

export const mainImageField = defineField({
  name: "mainImage",
  title: "Main image",
  type: "image",
  options: { hotspot: true },
  fields: [
    {
      name: "alt",
      type: "string",
      title: "Alternative Text",
    },
  ],
});

export const categoriesField = (typeName: string) =>
  defineField({
    name: "categories",
    title: "Categories",
    type: "array",
    of: [{ type: "reference", to: { type: typeName } }],
  });

export const publishedAtField = defineField({
  name: "publishedAt",
  title: "Published at",
  type: "date",
  options: { dateFormat: "MMM D" },
});

export const bodyField = defineField({
  name: "body",
  title: "Body",
  type: "blockContent",
});
