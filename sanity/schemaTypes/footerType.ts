import { HomeIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const footerType = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  icon: HomeIcon,

  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Footer Contents',
      readOnly: true,
    }),
    defineField({
      name: 'section1',
      title: 'Section 1',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'links',
          title: 'Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                }),
                defineField({
                  name: 'link',
                  title: 'Link',
                  type: 'string',
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'section2',
      title: 'Section 2',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'links',
          title: 'Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                }),
                defineField({
                  name: 'link',
                  title: 'Link',
                  type: 'string',
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'section3',
      title: 'Section 3',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'links',
          title: 'Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                }),
                defineField({
                  name: 'link',
                  title: 'Link',
                  type: 'string',
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'socialLabel',
      title: 'Social Label',
      type: 'string',
    }),
    defineField({
      name: 'facebookLink',
      title: 'Facebook Link',
      type: 'string',
    }),
    defineField({
      name: 'linkedinLink',
      title: 'Linkedin Link',
      type: 'string',
    }),
    defineField({
      name: 'youtubeLink',
      title: 'Youtube Link',
      type: 'string',
    }),
    defineField({
      name: 'downloadAppLabel',
      title: 'Download App Label',
      type: 'string',
    }),
    defineField({
      name: 'appStoreLink',
      title: 'App Store Link',
      type: 'string',
    }),
    defineField({
      name: 'playStoreLink',
      title: 'Play Store Link',
      type: 'string',
    }),
    defineField({
      name: 'copyright',
      title: 'Copyright',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'pageTitle',
    },
  },
});
