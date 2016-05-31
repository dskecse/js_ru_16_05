import Article from './Article'
import BasicStore from './BasicStore'
import { normalizedArticles, normalizedComments } from '../fixtures'

export const stores = {}

Object.assign(stores, {
    articles: new Article(stores, normalizedArticles),
    comments: new BasicStore(stores, normalizedComments)
})

export const commentStore = stores.comments
export const articleStore = stores.articles
