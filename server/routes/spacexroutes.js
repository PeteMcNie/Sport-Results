const express = require('express')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  console.log('ONLOAD SPACEX ROUTE HIT')
  
})

router.get('/:data', (req, res) => {
  const data = req.params.data
  console.log('Spacexroutes data: ', data)
})
