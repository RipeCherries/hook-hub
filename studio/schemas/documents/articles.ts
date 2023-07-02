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
      type: 'string'
    }),
    defineField({
      title: 'Слаг:',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    }),
    defineField({
      title: 'Дата публикации:',
      name: 'publishedAt',
      type: 'datetime',
      options: {
        dateFormat: 'DD.MM.YYYY'
      }
    }),
    defineField({
      title: "Категории",
      name: "categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "categories"
            }
          ]
        }
      ]
    }),
    defineField({
      title: 'Обложка статьи:',
      name: 'coverImage',
      type: 'customImage'
    }),
    defineField({
      title: "Текст статьи:",
      name: "body",
      type: "bodyText"
    })
  ],

  preview: {
    select: {
      media: 'coverImage',
      title: 'title',
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