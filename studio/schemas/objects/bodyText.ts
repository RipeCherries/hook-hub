import {defineField, defineType} from 'sanity'
import {MdPerson} from 'react-icons/md'

export default defineType({
  title: 'Тело статьи',
  name: 'bodyText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        {
          title: 'Заголовок 1',
          value: 'h1'
        },
        {
          title: 'Заголовок 2',
          value: 'h2'
        },
        {
          title: 'Заголовок 3',
          value: 'h3'
        },
        {
          title: 'Стандартный текст',
          value: 'normal'
        }
      ],
      lists: [
        {
          title: 'Маркированный список',
          value: 'bullet'
        },
        {
          title: 'Нумерованный список',
          value: 'number'
        }
      ],
      marks: {
        decorators: [
          {
            title: 'Жирный',
            value: 'strong'
          },
          {
            title: 'Курсивный',
            value: 'em'
          }
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url'
              }
            ]
          }
        ]
      }
    },
    {
      title: "Изображение",
      type: "customImage",
    },
    {
      title: "Код",
      type: "customCode"
    }
  ]
})