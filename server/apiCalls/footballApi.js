const request = require('superagent')

const key = require('../tools/footballApiKey')
// const trimData = require('../functions/trimData')

function getTeamInfo (team) {
  return request
    .get(`https://api.football-data.org/v2/teams/${team}/matches/`)
    .set('X-Auth-Token', `${key.key}`)
    .then(teamInfo => {
      const data = teamInfo.body.matches
      // const trimmedInfo = trimData(teamInfo)
      console.log('CRONJOB CALL', teamInfo.body.matches)
      return data
    })
    .catch(err => {
      throw err.status(500).send('ERROR COLLECTING DATA FROM FOOTBALL API', err.message)
    })
}

getTeamInfo(66) // Manchester United id
getTeamInfo(397) // Brighton id

module.exports = getTeamInfo


