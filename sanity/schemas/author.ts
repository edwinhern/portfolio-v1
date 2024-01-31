import { defineType } from 'sanity';

import { imageField, slugField, stringField } from './commonFields';

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [stringField({ name: 'name', title: 'Name' }), imageField({ name: 'image', title: 'Image' })],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
});
