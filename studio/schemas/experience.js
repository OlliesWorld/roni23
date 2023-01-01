// import {HomeIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'experience',
    type: 'document',
    title: 'Experience',
    // icon: HomeIcon,
    fields: [        
      defineField({
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
      defineField({ title: "Alt", name: "alt", type: "string" }),
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
      }),
      defineField({
        name: 'company',
        title: 'Company',
        type: 'string',
      }),
      defineField({
      name: 'time',
      title: 'Time',
      type: 'string',
     }),
     defineField({
        name: 'description',
        title: 'Description',
        type: 'blockContent',
      
      }),
      defineField({
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [
          {
            type: "reference",
            to: [{ type: "tag" }],
          },
        ],
      }),
      defineField({
        title: 'Link',
        name: 'href',
        type: 'url',
        validation: Rule => Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel']
        })
      }),
      defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      }),
    ]
  })