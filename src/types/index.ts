export type ContentType = 
  | 'schedule'
  | 'results'
  | 'standings'
  | 'statistics'
  | 'news'
  | 'twitter'
  | 'sponsors'
  | 'photos'
  | 'profiles'
  | 'facts'

export type ContentSize = 'small' | 'medium' | 'large'

export interface ContentBlock {
  id: string
  type: ContentType
  size: ContentSize
  data: any
}

export interface Column {
  id: string
  blocks: ContentBlock[]
}