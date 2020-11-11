const request = require('superagent')

const trimSpaceXData = require('../functions/trimSpaceXData')
const trimRocketData = require('../functions/trimRocketData')
const selectRocketsUsedInLaunches = require('../functions/selectRockets')

const spacexLaunchUrl = 'https://api.spacexdata.com/v4/launches/past'
const spacexRocketUrl = 'https://api.spacexdata.com/v4/rockets'

async function getspacexdata () {
  const spacexData = []
  const launches = await getAllPastLaunches()
  const allRockets = await getAllRockets()

  Promise.all([launches, allRockets])
    .then(data => {
      const rockets = selectRocketsUsedInLaunches(data)
      const spacexData = { launches, rockets }
      console.log('getspacexdata LAUNCHES & ROCKETS ', spacexData)
      return spacexData
    })
    .catch(err => {
      throw err.status(500).send('ERROR IN PROMISE ALL getspacexdata function', err.message)
    })
  console.log(spacexData)
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

// const allSpaceXRocketIds = data.body.map(el => el.id)
// console.log('ALL SPACEX ROCKETS ', allSpaceXRocketIds)
// const rockets = trimmedData.map(el => el.rocket)
// console.log('ROCKETS ', rockets)
