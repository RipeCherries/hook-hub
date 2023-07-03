import {defineField, defineType} from 'sanity'
import {MdStar} from 'react-icons/md'

export default defineType({
  title: 'Избранные',
  name: 'featured',
  type: 'document',
  icon: MdStar,
  fields: [
    defineField({
      title: 'Заголовок',
      name: 'title',
      type: 'string'
    }),
    defineField({
      title: 'Избранные статьи',
      name: 'blog',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'articles'}]
        }
      ],
      validation: (Rule) => [
        Rule.error("Каждый элемент должен быть уникальным!").unique(),
        Rule.error("Должен существовать хотя бы один элемент!").required()
      ]
    }),
    defineField({
      title: 'Избранные категории',
      name: 'categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'categories'}]
        }
      ],
      validation: (Rule) => [
        Rule.error("Каждый элемент должен быть уникальным!").unique(),
        Rule.error("Должен существовать хотя бы один элемент!").required()
      ]
    })
  ]
})