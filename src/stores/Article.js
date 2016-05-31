import BasicStore from './BasicStore'
import AppDispatcher from '../dispatcher'
import { DELETE_ARTICLE, CREATE_COMMENT } from "../constants"

export default class Article extends BasicStore {
    constructor(...args) {
        super(...args)

        AppDispatcher.register((action) => {
            const { type, payload } = action

            switch (type) {
                case DELETE_ARTICLE:
                    this._delete(payload.id)
                    this.emitChange()
                    break;
                case CREATE_COMMENT:
                    const article = this.getById(payload.articleId)
                    article.comments.push(payload.comment.id)
                    this.emitChange()
                    break;
            }
        })
    }
}
