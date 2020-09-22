const express = require('express')
const request = require('superagent')

const router = express.Router()

module.exports = router

router.get('/:team', (req, res) => {
    let team = 66
    console.log('router', team)
 

    return request
        .get(`https://api.football-data.org/v2/teams/${team}/matches/`)
        .set('X-Auth-Token', '9a0717303f9a43ef8574f6f0a14dee51')
        .then(res => {
            console.log('fb api res', res.body)
        })


    //'https://api.football-data.org/v2/competitions/PL/matches' //ALL MATCHES FOR THAT COMPETION
    // '/v2/competitions/{id = PL}/standings'  ALL STANDINGS FOR THAT COMPETION
    // '/v2/teams/{id}/matches/'  ALL MATCHES FOR A TEAM


})
