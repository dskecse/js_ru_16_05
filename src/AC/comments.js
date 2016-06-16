import { ADD_COMMENT } from "../constants"

export function addComment(articleId, comment) {
    const id = Math.random() * 100
    return {
        type: ADD_COMMENT,
        payload: {
            articleId,
            comment: { ...comment, id }
        }
    }
}
