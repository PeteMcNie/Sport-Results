const getTeamInfo = require('./footballApi')
// const server = require('../server')

jest.mock('./footballApi', () => {
  return {
    getTeamInfo: jest.fn()
  }
})

xtest('returns football api data', () => {
  const teamRequested = 66

  getTeamInfo.mockImplementation(() => Promise.resolve(
    {
      date: 'today',
      status: 'Played'
    }
  ))

  return getTeamInfo(teamRequested)
    .then(teamInfo => {
      expect(teamInfo.date).toBe('Sandwiches')
    })
})

// describe('GET REQUEST', () => {
//   it('should get football team information', async done => {
//     const res = await request(server)
//       .get('https://api.football-data.org/v2/teams/66/matches/')
//       .set('X-Auth-Token', `${key.key}`)
//     // .expect('Content-Type', /json/)
//     // .expect(200)
//     // .then(res => {
//     //   expect(res.body.date).toEqual('sandwich')

//     expect(res.status).toEqual(200)
//     done()
//   })
// })
