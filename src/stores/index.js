import Article from './Article'
import Comment from "./Comment"
import { normalizedArticles, normalizedComments } from '../fixtures'

export const stores = {}

Object.assign(stores, {
    articles: new Article(stores, normalizedArticles),
    comments: new Comment(stores, normalizedComments)
})

export const commentStore = stores.comments
export const articleStore = stores.articles
