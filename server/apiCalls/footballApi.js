const request = require('superagent')

const key = require('../tools/footballApiKey')
const trimData = require('../functions/trimData')

function getTeamInfo (team) {
  return request
    .get(`https://api.football-data.org/v2/teams/${team}/matches/`)
    .set('X-Auth-Token', `${key.key}`)
    .then(teamInfo => {
      const trimmedInfo = trimData(teamInfo)
      return trimmedInfo
    })
}

module.exports = getTeamInfo
