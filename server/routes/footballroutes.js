const express = require('express')
const request = require('superagent')

const router = express.Router()

module.exports = router

function trimInfo (teamInfo) {
  const trimmedInfo = teamInfo.body.matches.map(function (el) {
    return {
      awayTeam: el.awayTeam,
      hometeam: el.homeTeam,
      score: el.score,
      matchday: el.matchday,
      data: el.date,
      competition: el.competition,
      status: el.status
    }
  })
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
})

// FURTHER API CALLS COULD BE MADE USING THE BELOW:

// 'https://api.football-data.org/v2/competitions/PL/matches' //ALL MATCHES FOR THAT COMPETION 
// '/v2/competitions/{id = PL}/standings'  ALL STANDINGS FOR THAT COMPETION
// '/v2/teams/{id}/matches/'  ALL MATCHES FOR A TEAM
