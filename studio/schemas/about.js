// import {HomeIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'about',
    type: 'document',
    title: 'About',
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
      defineField({title: "Alt", name: "alt", type: "string" }),
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
      }),
      defineField({
        name: 'subtitle',
        title: 'SubTitle',
        type: 'string',
      }),
     
      defineField({
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      
      }), 
      defineField({
        name: 'gallery',
        title: 'Gallery',
        type: 'array',
        of: [{type: 'image'}]
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