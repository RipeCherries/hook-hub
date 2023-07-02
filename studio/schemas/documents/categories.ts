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
      title: 'Обложка',
      name: 'coverImage',
      type: 'customImage'
    }),
    defineField({
      title: 'Описание',
      name: 'description',
      type: 'bodyText'
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