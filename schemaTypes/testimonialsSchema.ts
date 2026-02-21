import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'testimonials',
  title: 'Testimonials Section',
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
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'quote', type: 'text', title: 'Quote' },
            { name: 'name', type: 'string', title: 'Name' },
            { name: 'title', type: 'string', title: 'Title/Position' },
            {
              name: 'image',
              type: 'image',
              title: 'Avatar',
              options: { hotspot: true },
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'companyLogos',
      title: 'Company Logos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Company Name' },
            { name: 'logo', type: 'image', title: 'Logo' },
            { name: 'invertOnDark', type: 'boolean', title: 'Invert on Dark Mode' },
          ],
        },
      ],
    }),
  ],
});