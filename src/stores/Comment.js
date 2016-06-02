import BasicStore from './BasicStore'
import AppDispatcher from '../dispatcher'
import { ADD_COMMENT, LOAD_COMMENTS_BY_ARTICLE_ID, START, SUCCESS, FAIL } from '../constants'

export default class Comment extends BasicStore {
    constructor(...args) {
        super(...args)

        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, payload, response, error } = action

            switch (type) {
                case ADD_COMMENT:
                    this._add(payload.comment)
                    this.emitChange()
                    break

                case LOAD_COMMENTS_BY_ARTICLE_ID + START:
                    break

                case LOAD_COMMENTS_BY_ARTICLE_ID + SUCCESS:
                    response.forEach(this._add)
                    this.emitChange()
                    break

                case LOAD_COMMENTS_BY_ARTICLE_ID + FAIL:
                    break
            }
        })
    }
}
