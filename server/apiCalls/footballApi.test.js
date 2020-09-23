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
