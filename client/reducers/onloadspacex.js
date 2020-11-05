import { ON_LOAD_GET_SPACEX_DATA_SUCCESS } from '../actions/spaceActions'

function onloadSpaceXData (state = [], action) {
  switch (action.type) {
    case ON_LOAD_GET_SPACEX_DATA_SUCCESS:
      return action.spacexdata
    default:
      return state
  }
}

export default onloadSpaceXData
