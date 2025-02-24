import { HomeIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const resourcePagesType = defineType({
  name: 'resourcePages',
  title: 'Resource Pages',
  type: 'document',
  icon: HomeIcon,

  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Resource Pages Contents',
      readOnly: true,
    }),
    defineField({
      name: 'privacyPolicy',
      title: 'Privacy Policy',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
        },
      ],
    }),
    defineField({
      name: 'termsAndConditions',
      title: 'Terms & Conditions',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
        },
      ],
    }),
    defineField({
      name: 'aboutUs',
      title: 'About Us',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'pageTitle',
    },
  },
});
