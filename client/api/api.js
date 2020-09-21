// export function getTeam (team) {
//   console.log('api: getteam hit', team)
//   fetch('/home', { method: 'POST', body: team })
//     .then(response => {
//         console.log('api POST response', response)
//         return response.body
//     })
// }

import request from 'superagent'

export function getTeam (team) {
  console.log('api: getteam hit', team)
  return request
    .post('/home')
    .send(team)
    .then(response => {
      console.log('api POST response', response.body)
      return response.body
    })
}
