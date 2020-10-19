export const GET_SPACEX_DATA = 'GET_SPACEX_DATA'
export const GET_SPACEX_DATA_SUCCESS = 'GET_SPACEX_DATA_SUCCESS'
export const GET_SPACEX_DATA_FAILURE = 'GET_SPACEX_DATA_FAILURE'

export function getSpaceData (data) {
  return (dispatch) => {
    dispatch(gettingSpaceXData())
    return getSpaceXData(data)
      .then(returnData => {
        console.log(returnData)
      })
  }
}

export function gettingSpaceXData () {
  return {
    type: GET_SPACEX_DATA
  }
}
