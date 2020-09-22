const express = require('express')

const router = express.Router()

module.exports = router

router.get('/:team', (req, res) => {
    const team = req.params
    console.log('router', team)
})
