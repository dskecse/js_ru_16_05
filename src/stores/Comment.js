import BasicStore from "./BasicStore"
import AppDispatcher from "../dispatcher"
import { CREATE_COMMENT } from "../constants"

export default class Comment extends BasicStore {
    constructor(...args) {
        super(...args)

        AppDispatcher.register(action => {
            const { type, payload } = action

            switch (type) {
                case CREATE_COMMENT:
                    this._add(payload.comment)
                    this.emitChange()
                    break;
            }
        })
    }
}
