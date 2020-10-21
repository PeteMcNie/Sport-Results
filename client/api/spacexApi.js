import request from 'superagent'

const spaceXUrl = '/home/v1/spacex'

export function onloadGetSXData () {
  // console.log('SPACEX API ONLOAD CALLED')
  return request
    .get(`${spaceXUrl}`)
    .then(response => {
      console.log('spacex ONLOAD request RESPONSE: ', response.body)
    })
    .catch(err => {
      console.error('Error in spacexApi: onloadGetSXData', err)
    })
}

export function getSpaceXData (data) {
  const stringData = data.SpaceX
  //   console.log('SPACEX api string: ', stringData)
  return request
    .get(`${spaceXUrl}/${stringData}`)
    .then(response => {
      console.log('spacex GET request RESPONSE: ', response.body)
    })
    .catch(err => {
      console.error('Error in spacexApi: getSpaceXData', err)
    })
}
