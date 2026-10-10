import {defineField, defineType} from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Leistung',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string'}),
    defineField({name: 'description', title: 'Beschreibung', type: 'text', rows: 3}),
    defineField({name: 'price', title: 'Preis (z.B. "ab 25 €")', type: 'string'}),
    defineField({name: 'image', title: 'Bild', type: 'image', options: {hotspot: true}}),
    defineField({name: 'order', title: 'Reihenfolge', type: 'number'}),
  ],
  orderings: [
    {title: 'Reihenfolge', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]},
  ],
  preview: {
    select: {title: 'name', subtitle: 'price'},
  },
})
