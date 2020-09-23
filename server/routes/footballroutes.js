const express = require('express')
const request = require('superagent')

const router = express.Router()

module.exports = router

function trimInfo (teamInfo) {
  //  console.log(' BEFORE trimInfo function hit', teamInfo)
  const awayTeam = teamInfo.body.matches.map(el => el.awayTeam)
  const homeTeam = teamInfo.body.matches.map(el => el.homeTeam)
  // console.log('AFTER trimInfo function hit', awayTeam)

  const trimmedInfo = { awayTeam, homeTeam }
  console.log('TrimmedInfo', trimmedInfo)

  return trimmedInfo
}

router.get('/:team', (req, res) => {
  const team = req.params.team

  return request
    .get(`https://api.football-data.org/v2/teams/${team}/matches/`)
    .set('X-Auth-Token', '9a0717303f9a43ef8574f6f0a14dee51')
    .then(teamInfo => {
      const trimmedInfo = trimInfo(teamInfo)
      return trimmedInfo
    })
    .then(trimmedInfo => {
      res.json(trimmedInfo)
    })
    .catch(err => {
      console.error('ERROR IN FOOTBALL GET ROUTE', err)
      res.status(500).send(err.message)
    })
  // console.log('fb api res', teamInfo.body.matches)

  // 'https://api.football-data.org/v2/competitions/PL/matches' //ALL MATCHES FOR THAT COMPETION
  // '/v2/competitions/{id = PL}/standings'  ALL STANDINGS FOR THAT COMPETION
  // '/v2/teams/{id}/matches/'  ALL MATCHES FOR A TEAM
})
