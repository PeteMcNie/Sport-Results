const express = require('express')

const getTeamInfo = require('../apiCalls/footballApi')

const router = express.Router()

module.exports = router

router.get('/:team', (req, res) => {
  const team = req.params.team

  return getTeamInfo(team)
    .then(teamInfo => {
      res.json(teamInfo)
    })
    .catch(err => {
      res.status(500).send('ERROR IN FOOTBALL GET ROUTE', err.message)
    })
})

// FURTHER API CALLS COULD BE MADE USING THE BELOW:

// 'https://api.football-data.org/v2/competitions/PL/matches' //ALL MATCHES FOR THAT COMPETION
// '/v2/competitions/{id = PL}/standings'  ALL STANDINGS FOR THAT COMPETION
// '/v2/teams/{id}/matches/'  ALL MATCHES FOR A TEAM
