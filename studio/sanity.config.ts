import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {codeInput} from '@sanity/code-input'
import {schemaTypes} from './schemas'

import {SidebarList} from './components/SidebarList'

export default defineConfig({
  name: 'default',
  title: 'hook-hub',

  projectId: 'ywuj37gw',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: SidebarList
    }),
    visionTool(),
    codeInput()
  ],

  schema: {
    types: schemaTypes
  }
})
