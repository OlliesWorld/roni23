// import {HomeIcon} from '@sanity/icons'
export default {
    name: 'about',
    type: 'document',
    title: 'About',
    // icon: HomeIcon,
    fields: [        
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      { title: "Alt", name: "alt", type: "string" },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'subtitle',
        title: 'SubTitle',
        type: 'string',
      },
     
      {
        name: 'body',
        title: 'Body',
        type: 'text',
      
      }, 
      {
        name: 'gallery',
        title: 'Gallery',
        type: 'array',
        of: [{type: 'image'}]
    },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
    ]
  }