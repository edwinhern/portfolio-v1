import { defineType } from "sanity";

import { stringField } from "./commonFields";

export default defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [stringField({ name: "title", title: "Title" })],
});
