import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'features',
  title: 'Features Section',
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
      name: 'features',
      title: 'Features',
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
                  { title: 'Zap', value: 'zap' },
                  { title: 'Gem', value: 'gem' },
                  { title: 'Shopping Bag', value: 'shoppingBag' },
                  { title: 'Sparkles', value: 'sparkles' },
                  { title: 'Check Circle', value: 'checkCircle' },
                  { title: 'Video', value: 'video' },
                ],
              },
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(3).max(6),
    }),
  ],
});