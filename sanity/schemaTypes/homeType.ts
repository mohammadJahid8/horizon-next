import { HomeIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const homeType = defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: HomeIcon,

  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Home Contents',
      readOnly: true,
    }),
    defineField({
      name: 'section1',
      title: 'Section 1',
      type: 'object',
      fields: [
        defineField({
          name: 'titleLight',
          title: 'Title Light',
          type: 'string',
        }),
        defineField({
          name: 'titleBold',
          title: 'Title Bold',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
        }),
        defineField({
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
        }),
        defineField({
          name: 'appStoreLink',
          title: 'App Store Link',
          type: 'url',
        }),
        defineField({
          name: 'googlePlayLink',
          title: 'Google Play Link',
          type: 'url',
        }),
      ],
    }),
    defineField({
      name: 'section2',
      title: 'Section 2',
      type: 'object',
      fields: [
        defineField({
          name: 'features',
          title: 'Features',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                }),
              ],
            },
          ],
        }),

        defineField({
          name: 'getStartedProText',
          title: 'Get Started as Pro Text',
          type: 'string',
        }),

        defineField({
          name: 'getStartedPartnerText',
          title: 'Get Started as Partner Text',
          type: 'string',
        }),
      ],
    }),

    defineField({
      name: 'section3',
      title: 'Section 3',
      type: 'object',
      fields: [
        defineField({
          name: 'titleLight',
          title: 'Title Light',
          type: 'string',
        }),
        defineField({
          name: 'titleBold',
          title: 'Title Bold',
          type: 'string',
        }),

        defineField({
          name: 'steps',
          title: 'Steps',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'step',
                  title: 'Title',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'section4',
      title: 'Section 4',
      type: 'object',
      fields: [
        defineField({
          name: 'badgeText',
          title: 'Badge Text',
          type: 'string',
        }),
        defineField({
          name: 'titleBold',
          title: 'Title Bold',
          type: 'string',
        }),
        defineField({
          name: 'titleLight',
          title: 'Title Light',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'string',
        }),
        defineField({
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'section5',
      title: 'Section 5',
      type: 'object',
      fields: [
        defineField({
          name: 'badgeText',
          title: 'Badge Text',
          type: 'string',
        }),
        defineField({
          name: 'titleBold',
          title: 'Title Bold',
          type: 'string',
        }),
        defineField({
          name: 'titleLight',
          title: 'Title Light',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'string',
        }),
        defineField({
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'section6',
      title: 'Section 6',
      type: 'object',
      fields: [
        defineField({
          name: 'titleBold',
          title: 'Title Bold',
          type: 'string',
        }),
        defineField({
          name: 'titleLight',
          title: 'Title Light',
          type: 'string',
        }),

        defineField({
          name: 'comparisons',
          title: 'Comparisons',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'section7',
      title: 'Section 7',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title ',
          type: 'string',
        }),

        defineField({
          name: 'description',
          title: 'Description',
          type: 'string',
        }),
        defineField({
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
        }),
        defineField({
          name: 'appStoreLink',
          title: 'App Store Link',
          type: 'url',
        }),
        defineField({
          name: 'googlePlayLink',
          title: 'Google Play Link',
          type: 'url',
        }),
      ],
    }),
    defineField({
      name: 'section8',
      title: 'Section 8',
      type: 'object',
      fields: [
        defineField({
          name: 'titleBold',
          title: 'Title Bold',
          type: 'string',
        }),

        defineField({
          name: 'titleLight',
          title: 'Title Light',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'string',
        }),
        defineField({
          name: 'personName',
          title: 'Person Name',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'section9',
      title: 'Section 9',
      type: 'object',
      fields: [
        defineField({
          name: 'titleLight',
          title: 'Title Light',
          type: 'string',
        }),
        defineField({
          name: 'titleBold',
          title: 'Title Bold',
          type: 'string',
        }),

        defineField({
          name: 'faqs',
          title: 'FAQs',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'question',
                  title: 'Question',
                  type: 'string',
                }),
                defineField({
                  name: 'answer',
                  title: 'Answer',
                  type: 'text',
                }),
              ],
            },
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'pageTitle',
    },
  },
});
