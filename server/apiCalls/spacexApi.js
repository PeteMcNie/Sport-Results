const request = require('superagent')

const trimSpaceXData = require('../functions/trimSpaceXData')
const trimRocketData = require('../functions/trimRocketData')

const spacexLaunchUrl = 'https://api.spacexdata.com/v4/launches/past'
const spacexRocketUrl = 'https://api.spacexdata.com/v4/rockets'

async function getspacexdata () {
  const launches = await getAllPastLaunches()
  const allRockets = await getAllRockets()
  return Promise.all([launches, allRockets])
}

function getAllPastLaunches () {
  return request
    .get(`${spacexLaunchUrl}`)
    .then(data => {
      const trimmedLaunchData = trimSpaceXData(data.body)
      return trimmedLaunchData
    })
    .catch(err => {
      throw err.status(500).send('ERROR COLLECTING DATA FROM SPACEX LAUNCH API', err.message)
    })
}

function getAllRockets () {
  return request
    .get(`${spacexRocketUrl}`)
    .then(data => {
      const trimmedRocketData = trimRocketData(data.body)
      return trimmedRocketData
    })
    .catch(err => {
      throw err.status(500).send('ERROR COLLECTING DATA FROM SPACEX ROCKET API', err.message)
    })
}

module.exports = {
  getspacexdata
}
