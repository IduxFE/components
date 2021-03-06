import type { TagComponent } from './src/types'

import Tag from './src/Tag.vue'

const IxTag = Tag as unknown as TagComponent

export { IxTag }

export type { TagInstance, TagPublicProps as TagProps } from './src/types'
