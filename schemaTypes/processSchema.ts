import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'process',
  title: 'Process Section',
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
      name: 'steps',
      title: 'Process Steps',
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
              title: 'Icon',
              options: {
                list: [
                  { title: 'File Code', value: 'fileCode' },
                  { title: 'Palette', value: 'palette' },
                  { title: 'Eye', value: 'eye' },
                  { title: 'CPU', value: 'cpu' },
                  { title: 'Download', value: 'download' },
                  { title: 'Life Buoy', value: 'lifeBuoy' },
                ],
              },
            },
          ],
        },
      ],
    }),
  ],
});