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
      name: 'name',
      type: 'string'
    }),
    defineField({
      title: 'Slug:',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      }
    })
  ]
})