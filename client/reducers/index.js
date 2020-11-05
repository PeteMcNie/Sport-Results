import { combineReducers } from 'redux'

import teamMatchData from './teamMatchData'
import onloadSpaceXData from './onloadspacex'
import loading from './loading'

export default combineReducers({
  teamMatchData,
  onloadSpaceXData,
  loading
})
