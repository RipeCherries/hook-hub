import {defineField, defineType} from 'sanity'
import {MdCode} from 'react-icons/md'

export default defineType({
  title: 'Редактор кода',
  name: 'customCode',
  type: 'object',
  icon: MdCode,
  fields: [
    defineField({
      title: 'Редактор кода:',
      name: 'code',
      type: 'code',
      options: {
        withFilename: true
      }
    })
  ],

  preview: {
    select: {
      title: 'code.code'
    }
  }
})