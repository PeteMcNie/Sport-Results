const express = require('express')
const router = express.Router()
module.exports = router

const spacexapi = require('../apiCalls/spacexApi')

router.get('/', (req, res) => {
  console.log('ONLOAD SPACEX ROUTE HIT')
  spacexapi.getspacexdata()
    .then(data => {
      console.log('spacexdata in route', data)
    })
})

router.get('/:data', (req, res) => {
  const data = req.params.data
  console.log('Spacexroutes data: ', data)
})
