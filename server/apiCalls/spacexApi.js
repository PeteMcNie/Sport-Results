const request = require('superagent')

const spacexapiURL = 'https://api.spacexdata.com/v4/launches/past'

function getspacexdata () {
  console.log('hello spacex data function')
  return request
    .get(`${spacexapiURL}`)
    .then(data => {
      console.log('NEW spacex data received', data.body)
    })
}

module.exports = {
  getspacexdata
}

// OBJECT RECEIVING
// [
//   {
//     fairings: {
//       reused: false,
//       recovery_attempt: false,
//       recovered: false,
//       ships: []
//     },
//     links: {
//       patch: [Object],
//       reddit: [Object],
//       flickr: [Object],
//       presskit: null,
//       webcast: 'https://www.youtube.com/watch?v=0a_00nJ_Y88',
//       youtube_id: '0a_00nJ_Y88',
//       article: 'https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html',
//       wikipedia: 'https://en.wikipedia.org/wiki/DemoSat'
//     },
//     static_fire_date_utc: '2006-03-17T00:00:00.000Z',
//     static_fire_date_unix: 1142553600,
//     tbd: false,
//     net: false,
//     window: 0,
//     rocket: '5e9d0d95eda69955f709d1eb',
//     success: false,
//     details: 'Engine failure at 33 seconds and loss of vehicle',
//     crew: [],
//     ships: [],
//     capsules: [],
//     payloads: [ '5eb0e4b5b6c3bb0006eeb1e1' ],
//     launchpad: '5e9e4502f5090995de566f86',
//     auto_update: true,
//     failures: [ [Object] ],
//     flight_number: 1,
//     name: 'FalconSat',
//     date_utc: '2006-03-24T22:30:00.000Z',
//     date_unix: 1143239400,
//     date_local: '2006-03-25T10:30:00+12:00',
//     date_precision: 'hour',
//     upcoming: false,
//     cores: [ [Object] ],
//     id: '5eb87cd9ffd86e000604b32a'
//   },
//   {
//     fairings: {
//       reused: false,
//       recovery_attempt: false,
//       recovered: false,
//       ships: []
//     },
//     links: {
//       patch: [Object],
//       reddit: [Object],
//       flickr: [Object],
//       presskit: null,
//       webcast: 'https://www.youtube.com/watch?v=Lk4zQ2wP-Nc',
//       youtube_id: 'Lk4zQ2wP-Nc',
//       article: 'https://www.space.com/3590-spacex-falcon-1-rocket-fails-reach-orbit.html',
//       wikipedia: 'https://en.wikipedia.org/wiki/DemoSat'
//     },
//     static_fire_date_utc: null,
//     static_fire_date_unix: null,
//     tbd: false,
//     net: false,
//     window: 0,
//     rocket: '5e9d0d95eda69955f709d1eb',
//     success: false,
//     details: 'Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage',
//     crew: [],
//     ships: [],
//     capsules: [],
//     payloads: [ '5eb0e4b6b6c3bb0006eeb1e2' ],
//     launchpad: '5e9e4502f5090995de566f86',
//     auto_update: true,
//     failures: [ [Object] ],
//     flight_number: 2,
//     name: 'DemoSat',
//     date_utc: '2007-03-21T01:10:00.000Z',
//     date_unix: 1174439400,
//     date_local: '2007-03-21T13:10:00+12:00',
//     date_precision: 'hour',
//     upcoming: false,
//     cores: [ [Object] ],
//     id: '5eb87cdaffd86e000604b32b'
//   },
