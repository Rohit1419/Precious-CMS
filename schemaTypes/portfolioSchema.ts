import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'portfolio',
  title: 'Portfolio Section',
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
      name: 'categories',
      title: 'Portfolio Categories',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'projects',
      title: 'Portfolio Projects',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Project Title' },
            { name: 'description', type: 'text', title: 'Description' },
            { name: 'category', type: 'string', title: 'Category' },
            {
              name: 'image',
              type: 'image',
              title: 'Project Image',
              options: { hotspot: true },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative Text',
                },
              ],
            },
            { name: 'videoUrl', type: 'url', title: 'Video URL (Optional)' },
            { name: 'featured', type: 'boolean', title: 'Featured Project' },
            { name: 'client', type: 'string', title: 'Client Name' },
            { name: 'date', type: 'date', title: 'Project Date' },
          ],
        },
      ],
    }),
  ],
});