import AppDispatcher from "../dispatcher"
import { CREATE_COMMENT } from "../constants"

export function createComment(comment, articleId) {
    const id = Math.random() * 100
    const action = {
        type: CREATE_COMMENT,
        payload: {
            articleId,
            comment: {...comment, id}
        }
    }
    AppDispatcher.dispatch(action)
}
