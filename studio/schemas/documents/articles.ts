import {defineField, defineType} from 'sanity'
import {MdLineStyle} from 'react-icons/md'
import {format} from 'date-fns'

export default defineType({
  title: 'Статьи',
  name: 'articles',
  type: 'document',
  icon: MdLineStyle,
  fields: [
    defineField({
      title: 'Название статьи:',
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
      title: 'Дата публикации:',
      name: 'publishedAt',
      type: 'datetime',
      options: {
        dateFormat: 'DD.MM.YYYY'
      },
      validation: (Rule) => Rule.error('Это поле не может быть пустым!').required()
    }),

    defineField({
      title: 'Категории:',
      name: 'categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'categories'}]
        }
      ],
      validation: (Rule) => Rule.error('Это поле не может быть пустым!').required()
    }),

    defineField({
      title: 'Автор:',
      name: 'author',
      type: 'reference',
      to: [{type: 'authors'}],
      validation: (Rule) => Rule.error('Это поле не может быть пустым!').required()
    }),

    defineField({
      title: 'Обложка статьи:',
      name: 'coverImage',
      type: 'customImage',
      validation: (Rule) => Rule.error('Это поле не может быть пустым!').required()
    }),

    defineField({
      title: 'Аннотация:',
      name: 'annotation',
      type: 'customTextEditor',
      validation: (Rule) => Rule.error('Это поле не может быть пустым!').required()
    }),

    defineField({
      title: 'Текст статьи:',
      name: 'body',
      type: 'customTextEditor',
      validation: (Rule) => Rule.error('Это поле не может быть пустым!').required()
    })
  ],

  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
      publishedAt: 'publishedAt'
    },
    prepare({media, title, publishedAt}) {
      return {
        title,
        media,
        subtitle: publishedAt ? format(new Date(publishedAt), 'dd.mm.yyyy') : ''
      }
    }
  }
})