// import {HomeIcon} from '@sanity/icons'
export default {
    name: 'project',
    type: 'document',
    title: 'Project',
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
        title: 'github',
        name: 'github',
        type: 'url',
        validation: Rule => Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel']
        })
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