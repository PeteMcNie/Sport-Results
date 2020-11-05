import {
  ON_LOAD_GET_SPACEX_DATA,
  ON_LOAD_GET_SPACEX_DATA_SUCCESS,
  ON_LOAD_GET_SPACEX_DATA_FAILURE,
  GET_SPACEX_DATA,
  GET_SPACEX_DATA_SUCCESS,
  GET_SPACEX_DATA_FAILURE
} from '../actions/spaceActions'

function loading (state = false, action) {
  switch (action.type) {
    case ON_LOAD_GET_SPACEX_DATA:
    case GET_SPACEX_DATA:
      return true

    case ON_LOAD_GET_SPACEX_DATA_SUCCESS:
    case ON_LOAD_GET_SPACEX_DATA_FAILURE:
    case GET_SPACEX_DATA_SUCCESS:
    case GET_SPACEX_DATA_FAILURE:
      return false

    default:
      return state
  }
}

export default loading
