import request from 'superagent'

const spaceXUrl = '/home/v1/spacex'

export function onloadGetSXData () {
  return request
    .get(`${spaceXUrl}`)
    .then(response => {
      console.log('ONLOAD RESPONSE should have LAUNCH + ROCKET data ', response.body)
      return response.body
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
