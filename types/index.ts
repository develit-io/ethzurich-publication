export interface Article {
  title: string
  address: string
  file: string
  publishedDate?: Date
  reviewEnd?: Date
  amount: string
  state: 'published' | 'inProgress' | 'inReview' | 'draft'
}
