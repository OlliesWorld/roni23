// import {HomeIcon} from '@sanity/icons'
export default {
    name: 'experience',
    type: 'document',
    title: 'Experience',
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
        name: 'company',
        title: 'Company',
        type: 'string',
      },
     {
      name: 'time',
      title: 'Time',
      type: 'string',
     },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [
          {
            type: "reference",
            to: [{ type: "tag" }],
          },
        ],
      },
      {
        title: 'Link',
        name: 'href',
        type: 'url',
        validation: Rule => Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel']
        })
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