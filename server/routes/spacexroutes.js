const express = require('express')
const router = express.Router()
module.exports = router

const spacexapi = require('../apiCalls/spacexApi')

router.get('/', (req, res) => {
  spacexapi.getspacexdata()
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send('Error in spacexroutes: ' + err.message)
    })
})

router.get('/:data', (req, res) => {
  const data = req.params.data
  console.log('Spacexroutes data: ', data)
})
