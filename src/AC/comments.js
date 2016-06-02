import AppDispatcher from '../dispatcher'
import { ADD_COMMENT, LOAD_COMMENTS_BY_ARTICLE_ID } from '../constants'
import { asyncAC } from "./utils"
import { loadCommentsByArticleIdCall } from "./apiCalls"

export function addComment(articleId, comment) {
    const id = Math.random() * 100
    AppDispatcher.dispatch({
        type: ADD_COMMENT,
        payload: {
            articleId,
            comment: {...comment, id}
        }
    })
}

export const loadCommentsByArticleId = asyncAC(
    LOAD_COMMENTS_BY_ARTICLE_ID,
    loadCommentsByArticleIdCall
)
