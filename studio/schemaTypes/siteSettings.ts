import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Allgemeine Infos',
  type: 'document',
  fields: [
    defineField({name: 'businessName', title: 'Unternehmensname', type: 'string'}),
    defineField({name: 'tagline', title: 'Slogan', type: 'string'}),
    defineField({name: 'phone', title: 'Telefon', type: 'string'}),
    defineField({name: 'email', title: 'E-Mail', type: 'string'}),
    defineField({name: 'address', title: 'Adresse', type: 'text', rows: 3}),
    defineField({name: 'logo', title: 'Logo', type: 'image', options: {hotspot: true}}),
    defineField({
      name: 'openingHours',
      title: 'Öffnungszeiten',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({name: 'day', title: 'Tag', type: 'string'}),
          defineField({name: 'hours', title: 'Uhrzeit (z.B. 9:00 – 18:00)', type: 'string'}),
          defineField({name: 'closed', title: 'Geschlossen', type: 'boolean', initialValue: false}),
        ],
        preview: {
          select: {title: 'day', subtitle: 'hours'},
        },
      }],
    }),
  ],
  preview: {
    select: {title: 'businessName'},
  },
})
