/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { defaultDocumentNode } from "@/sanity/desk/defaultDocumentNode";
import { codeInput } from "@sanity/code-input";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";

export default defineConfig({
  basePath: "/admin",
  projectId,
  dataset,
  schema,
  plugins: [
    codeInput(),
    deskTool({ defaultDocumentNode }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
