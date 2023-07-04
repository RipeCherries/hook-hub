import {defineField, defineType} from 'sanity'
import {MdCategory} from 'react-icons/md'

export default defineType({
  title: 'Категории',
  name: 'categories',
  type: 'document',
  icon: MdCategory,
  fields: [
    defineField({
      title: 'Название категории:',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.error('Это поле не может быть пустым!').required()
    }),

    defineField({
      title: 'Slug:',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule) => Rule.error('Это поле не может быть пустым!').required()
    }),

    defineField({
      title: 'Обложка категории:',
      name: 'coverImage',
      type: 'customImage',
      validation: (Rule) => Rule.error('Это поле не может быть пустым!').required()
    }),

    defineField({
      title: 'Описание категории:',
      name: 'description',
      type: 'customTextEditor',
      validation: (Rule) => Rule.error('Это поле не может быть пустым!').required()
    })
  ],

  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
      slug: 'slug'
    },
    prepare({media, title, slug}) {
      return {
        title,
        media,
        subtitle: slug.current
      }
    }
  }
})