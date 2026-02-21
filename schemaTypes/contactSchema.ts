import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'contact',
  title: 'Contact Section',
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
      name: 'formTitle',
      title: 'Form Title',
      type: 'string',
    }),
    defineField({
      name: 'formDescription',
      title: 'Form Description',
      type: 'text',
    }),
    defineField({
      name: 'successMessage',
      title: 'Success Message',
      type: 'string',
    }),
    defineField({
      name: 'errorMessage',
      title: 'Error Message',
      type: 'string',
    }),
  ],
});