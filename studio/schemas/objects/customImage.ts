import {defineField, defineType} from 'sanity'
import {MdImage} from 'react-icons/md'

export default defineType({
  title: 'Изображение:',
  name: 'customImage',
  type: 'image',
  icon: MdImage,
  options: {
    hotspot: true
  },
  fields: [
    defineField({
      title: 'Описание изображения (alt):',
      name: 'alt',
      type: 'string',
      validation: (Rule) => Rule.error('Это поле не может быть пустым!').required()
    })
  ]
})