import {MdStar} from 'react-icons/md'

export const SidebarList = (S: any) => {
  return S.list()
    .title('Разделы:')
    .items([
      S.listItem()
        .title('Избранное')
        .id('featuredItems')
        .icon(MdStar)
        .child(S.editor().schemaType('featured').documentId('featuredItems')),
      ...S.documentTypeListItems().filter((item: any) => item.getId() !== 'featured')
    ])
}