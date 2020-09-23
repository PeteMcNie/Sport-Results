const express = require('express')
const request = require('superagent')

const trimData = require('../functions/trimData')

const router = express.Router()

module.exports = router

router.get('/:team', (req, res) => {
  const team = req.params.team

  return request
    .get(`https://api.football-data.org/v2/teams/${team}/matches/`)
    .set('X-Auth-Token', '9a0717303f9a43ef8574f6f0a14dee51')
    .then(teamInfo => {
      const trimmedInfo = trimData(teamInfo)
      res.json(trimmedInfo)
    })
    .catch(err => {
      res.status(500).send('ERROR IN FOOTBALL GET ROUTE', err.message)
    })
})

// FURTHER API CALLS COULD BE MADE USING THE BELOW:

// 'https://api.football-data.org/v2/competitions/PL/matches' //ALL MATCHES FOR THAT COMPETION
// '/v2/competitions/{id = PL}/standings'  ALL STANDINGS FOR THAT COMPETION
// '/v2/teams/{id}/matches/'  ALL MATCHES FOR A TEAM
