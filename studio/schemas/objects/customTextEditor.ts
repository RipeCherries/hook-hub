import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Редактор текста:',
  name: 'customTextEditor',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        {title: 'Стандартный текст', value: 'normal'},
        {title: 'Заголовок 1', value: 'h1'},
        {title: 'Заголовок 2', value: 'h2'},
        {title: 'Заголовок 3', value: 'h3'},
        {title: 'Заголовок 4', value: 'h4'},
        {title: 'Заголовок 5', value: 'h5'},
        {title: 'Заголовок 6', value: 'h6'},
        {title: 'Цитата', value: 'blockquote'}
      ],
      lists: [
        {title: 'Маркированный список', value: 'bullet'},
        {title: 'Нумерованный список', value: 'number'}
      ],
      marks: {
        decorators: [
          {title: 'Жирный', value: 'strong'},
          {title: 'Курсивный', value: 'em'},
          {title: 'Подчёркнутый', value: 'underline'},
          {title: 'Зачёркнутый', value: 'strike-through'},
          {title: 'Код', value: 'code'}
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              defineField({
                title: 'URL',
                name: 'href',
                type: 'url'
              })
            ]
          }
        ]
      }
    },
    {
      title: 'Изображение',
      type: 'customImage'
    },
    {
      title: 'Код',
      type: 'customCode'
    }
  ]
})