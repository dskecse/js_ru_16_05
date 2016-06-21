import { ADD_COMMENT } from '../constants'
import { normalizedComments} from '../fixtures'
import { fromArray } from '../utils'

const defaultState = {
    entities: fromArray(normalizedComments),
    loading: false
}

export default (state = defaultState, action) => {
    const { type, payload, randomId, response, error } = action

    switch (type) {
        case ADD_COMMENT: return { ...state, entities: { ...state.entities, [randomId]: { ...payload.comment, id: randomId } } }
    }

    return state
}
