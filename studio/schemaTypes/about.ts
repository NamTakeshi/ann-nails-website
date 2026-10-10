import {defineField, defineType} from 'sanity'

export const about = defineType({
  name: 'about',
  title: 'Über uns',
  type: 'document',
  fields: [
    defineField({name: 'headline', title: 'Überschrift', type: 'string'}),
    defineField({name: 'text', title: 'Text', type: 'text', rows: 6}),
    defineField({name: 'photo', title: 'Foto', type: 'image', options: {hotspot: true}}),
  ],
})
