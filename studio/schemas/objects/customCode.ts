import {defineField, defineType} from 'sanity'
import {MdCode} from "react-icons/md"

export default defineType({
  title: "Код",
  name: "customCode",
  type: "object",
  icon: MdCode,
  fields: [
    defineField({
      title: "Код",
      name: "code",
      type: "code"
    })
  ],
  preview: {
    select: {
      title: "code.code"
    }
  }
})