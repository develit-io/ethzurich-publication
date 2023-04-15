import type { Article } from '~/types'

const publications: Article[] = ([
  {
    title: 'The Effects of Exercise on Mental Health',
    address: '0x3bAeCfDb7Aa8dA1bF34aBc2c50C4258c53f12009',
    file: 'exercise-mental-health.pdf',
    publishedDate: new Date(2023, 3, 14, 18, 27, 0),
    amount: '2300 PUB',
    state: 'published',
  },
  {
    title: 'A Study on the Impact of Climate Change',
    address: '0xAcFDBBc22cF7c3d3e3B26f17c34Bf4a8e2aE4Dd1',
    file: 'climate-change-agriculture.pdf',
    amount: '1500 PUB',
    state: 'inProgress',
  },
  {
    title: 'Investigating the Link Between Social Media & Depression',
    address: '0x7aA99BDa9c0987F89B1234567890ABCDEF123456',
    file: 'social-media-depression.pdf',
    reviewEnd: new Date(2023, 3, 15, 18, 27, 0),
    amount: '3200 PUB',
    state: 'inReview',
  },
  {
    title: 'Gene Editing for Disease Treatment',
    address: '0x7aA99BDa9c0987F89B1234567890ABCDEF123456',
    file: 'social-media-depression.pdf',
    amount: '3200 PUB',
    state: 'draft',
  },
])

export default defineEventHandler(() => {
  return publications
})
