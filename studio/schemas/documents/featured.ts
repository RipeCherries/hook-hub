import {defineField, defineType} from 'sanity'
import {MdStar} from 'react-icons/md'

export default defineType({
  title: 'Избранное',
  name: 'featured',
  type: 'document',
  icon: MdStar,
  fields: [
    defineField({
      title: 'Заголовок:',
      name: 'title',
      type: 'string'
    }),

    defineField({
      title: 'Избранные статьи:',
      name: 'featuredArticles',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'articles'}]
        }
      ],
      validation: (Rule) => [
        Rule.error('Все элементы в этом списке должны быть уникальными!').unique(),
        Rule.error('Это поле не может быть пустым!').required()
      ]
    }),

    defineField({
      title: 'Избранные категории:',
      name: 'featuredCategories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'categories'}]
        }
      ],
      validation: (Rule) => [
        Rule.error('Все элементы в этом списке должны быть уникальными!').unique(),
        Rule.error('Это поле не может быть пустым!').required()
      ]
    })
  ]
})