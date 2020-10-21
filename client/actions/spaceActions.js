import { getSpaceXData, onloadGetSXData } from '../api/spacexApi'

export const ON_LOAD_GET_SPACEX_DATA = 'ON_LOAD_GET_SPACEX_DATA'
export const ON_LOAD_GET_SPACEX_DATA_SUCCESS = 'ON_LOAD_GET_SPACEX_DATA_SUCCESS'
export const ON_LOAD_GET_SPACEX_DATA_FAILURE = 'ON_LOAD_GET_SPACEX_DATA_FAILURE'

export function getUpdatedSpaceXData () {
  // console.log('ONLOAD SPACEX ACTION CALLED')
  return (dispatch) => {
    dispatch(onloadGettingSXData)
    return onloadGetSXData()
      .then(returnData => {
        console.log('onload spacex action returning data: ', returnData)
      })
  }
}

export function onloadGettingSXData () {
  return {
    type: ON_LOAD_GET_SPACEX_DATA
  }
}



export const GET_SPACEX_DATA = 'GET_SPACEX_DATA'
export const GET_SPACEX_DATA_SUCCESS = 'GET_SPACEX_DATA_SUCCESS'
export const GET_SPACEX_DATA_FAILURE = 'GET_SPACEX_DATA_FAILURE'

export function getSpaceData (data) {
  console.log('space action sending: ', data)
  return (dispatch) => {
    dispatch(gettingSpaceXData())
    return getSpaceXData(data)
      .then(returnData => {
        console.log('space action returning data: ', returnData)
      })
  }
}

export function gettingSpaceXData () {
  return {
    type: GET_SPACEX_DATA
  }
}
