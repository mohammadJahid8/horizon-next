import { HomeIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const partnerRegisterType = defineType({
  name: 'partnerRegister',
  title: 'Partner Register/Signup',
  type: 'document',
  icon: HomeIcon,

  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Partner Register/Signup Contents',
      readOnly: true,
    }),

    defineField({
      name: 'leftTitle',
      title: 'Left Title',
      type: 'string',
    }),
    defineField({
      name: 'leftDescription',
      title: 'Left Description',
      type: 'string',
    }),
    defineField({
      name: 'rightTitle',
      title: 'Right Title',
      type: 'string',
    }),
    defineField({
      name: 'rightDescription',
      title: 'Right Description',
      type: 'string',
    }),
    defineField({
      name: 'alreadyHaveAccount',
      title: 'Already Have Account',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'pageTitle',
    },
  },
});
