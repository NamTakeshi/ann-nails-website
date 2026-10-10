import {defineField, defineType} from 'sanity'

export const hero = defineType({
  name: 'hero',
  title: 'Startseite',
  type: 'document',
  fields: [
    defineField({name: 'headline', title: 'Überschrift', type: 'string'}),
    defineField({name: 'subtext', title: 'Untertext', type: 'text', rows: 3}),
    defineField({name: 'ctaText', title: 'Button-Text', type: 'string'}),
    defineField({name: 'ctaLink', title: 'Button-Link (z.B. WhatsApp-Link)', type: 'url'}),
    defineField({name: 'bgImage', title: 'Hintergrundbild', type: 'image', options: {hotspot: true}}),
  ],
})
