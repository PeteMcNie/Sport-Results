import request from 'superagent'

const spaceXUrl = '/home/v1/spacex'

export function getSpaceXData (data) {
  console.log('SPACEX api: ', data)
  return request
    .get(`${spaceXUrl}/${data}`)
    .then(response => {
      console.log('spacex GET request RESPONSE: ', response)
    })
}
