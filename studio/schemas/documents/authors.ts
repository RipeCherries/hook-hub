import {defineField, defineType} from 'sanity'
import {MdPerson} from 'react-icons/md'

export default defineType({
  title: 'Авторы',
  name: 'authors',
  type: 'document',
  icon: MdPerson,
  fields: [
    defineField({
      title: 'Фамилия и Имя:',
      name: 'fullName',
      type: 'string',
      validation: (Rule) => Rule.error('Это поле не может быть пустым!').required()
    }),

    defineField({
      title: 'Slug:',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'fullName',
        maxLength: 96
      },
      validation: (Rule) => Rule.error('Это поле не может быть пустым!').required()
    }),

    defineField({
      title: 'Фото профиля:',
      name: 'authorImage',
      type: 'customImage',
      validation: (Rule) => Rule.error('Это поле не может быть пустым!').required()
    }),

    defineField({
      title: 'Об авторе:',
      name: 'authorBIO',
      type: 'customTextEditor',
      validation: (Rule) => Rule.error('Это поле не может быть пустым!').required()
    })
  ],

  preview: {
    select: {
      title: 'fullName',
      media: 'authorImage',
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