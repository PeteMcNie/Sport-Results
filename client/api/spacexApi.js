import request from 'superagent'

const spaceXUrl = '/home/v1/spacex'

export function getSpaceXData (data) {
  console.log('SPACEX api: ', data)
  const stringData = data.SpaceX
  return request
    .get(`${spaceXUrl}/${stringData}`)
    .then(response => {
      console.log('spacex GET request RESPONSE: ', response.body)
    })
}
