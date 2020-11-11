const express = require('express')
const router = express.Router()
module.exports = router

const spacexapi = require('../apiCalls/spacexApi')

router.get('/', (req, res) => {
  spacexapi.getspacexdata()
    .then(data => {
      console.log('CHECK TO SEE IF DATA IS CORRECTLY BEING SENT TO: spacexroutes. THIS IS FINAL CHECK OF WHAT IS BEING SENT TO THE CLIENT SIDE ', data)
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
