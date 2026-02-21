import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'problemSolution',
  title: 'Problem-Solution Section',
  type: 'document',
  fields: [
    defineField({
      name: 'problemTitle',
      title: 'Problem Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'problemDescription',
      title: 'Problem Description',
      type: 'text',
    }),
    defineField({
      name: 'problems',
      title: 'Problems',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Problem Title' },
            { name: 'description', type: 'text', title: 'Description' },
            { name: 'icon', type: 'string', title: 'Icon Name' },
          ],
        },
      ],
    }),
    defineField({
      name: 'solutionTitle',
      title: 'Solution Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'solutionDescription',
      title: 'Solution Description',
      type: 'text',
    }),
    defineField({
      name: 'solutions',
      title: 'Solutions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Solution Title' },
            { name: 'description', type: 'text', title: 'Description' },
            { name: 'icon', type: 'string', title: 'Icon Name' },
          ],
        },
      ],
    }),
  ],
});