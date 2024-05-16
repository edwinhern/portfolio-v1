import { apiVersion, dataset, projectId } from '@/sanity/lib/api';
import post from '@/sanity/schemas/post';
import { codeInput } from '@sanity/code-input';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';

import { schema } from './schemas';

export const PREVIEWABLE_DOCUMENT_TYPES = [post.name] satisfies string[];

export const PREVIEWABLE_DOCUMENT_TYPES_REQUIRING_SLUGS = [post.name] satisfies typeof PREVIEWABLE_DOCUMENT_TYPES;

// Used to generate URLs for drafts and live previews
export const PREVIEW_BASE_URL = '/api/preview';

export default defineConfig({
  basePath: '/admin',
  dataset,
  plugins: [
    codeInput(),
    deskTool({
      defaultDocumentNode: (S, { schemaType }) => {
        if ((PREVIEWABLE_DOCUMENT_TYPES as string[]).includes(schemaType)) {
          return S.document().views([
            // Default form view
            S.view.form(),
          ]);
        }

        return null;
      },
    }),
    unsplashImageAsset(),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  projectId,
  schema,
});
