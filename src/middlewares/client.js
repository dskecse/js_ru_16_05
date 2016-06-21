import $ from "jquery"
import { START, SUCCESS, FAIL } from "../constants"

export default store => dispatch => action => {
    const { ...rest, type, callAPI } = action
    if (!callAPI) return dispatch(action)

    dispatch({ ...rest, type: type + START })
    setTimeout(() => {
        $.get(callAPI)
            .done(response => dispatch({ ...rest, type: type + SUCCESS, response }))
            .fail(error => dispatch({ ...rest, type: type + FAIL, error }))
    }, 1000)
}
