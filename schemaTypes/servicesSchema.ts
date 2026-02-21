import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'services',
  title: 'Services Section',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sectionDescription',
      title: 'Section Description',
      type: 'text',
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'description', type: 'text', title: 'Description' },
            {
              name: 'icon',
              type: 'string',
              title: 'Icon Name',
              options: {
                list: [
                  { title: 'Camera', value: 'camera' },
                  { title: 'Rotate 3D', value: 'rotate3d' },
                  { title: 'Clapperboard', value: 'clapperboard' },
                  { title: 'User', value: 'user' },
                ],
              },
            },
            {
              name: 'features',
              type: 'array',
              title: 'Features',
              of: [{ type: 'string' }],
            },
          ],
        },
      ],
    }),
  ],
});