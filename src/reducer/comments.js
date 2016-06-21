import { ADD_COMMENT, LOAD_COMMENTS_FOR_ARTICLE, START, SUCCESS } from '../constants'
// import { normalizedComments } from '../fixtures'
import { fromArray } from '../utils'

const defaultState = {
    entities: {},
    loading: false
}

export default (state = defaultState, action) => {
    const { type, payload, randomId, response, error } = action

    switch (type) {
        case ADD_COMMENT: return { ...state, entities: { ...state.entities, [randomId]: { ...payload.comment, id: randomId } } }

        case LOAD_COMMENTS_FOR_ARTICLE + SUCCESS:
            return { ...state, loading: false, entities: { ...state.entities, ...fromArray(response) } }
    }

    return state
}
