// const { Pool } = require('pg')
// const pool = new Pool({
//     user: 'me',
//     host: 'localhost',
//     database: 'matches',
//     password: 'password',
//     port: 5432
// })

function getMatches (req, res) {
//  pool.query('SELECT * FROM matches ORDER BY id ASC', (err, res) => {
//     if (err) {
//       throw err
//     }
//     res.send(res.rows)
//   })
}

module.exports = {
  getMatches
}

const { Client } = require('pg')
const client = new Client({
  user: 'postgres', // Also found in pgAdmin, master folder before db folder I named
  host: 'localhost', // Server name or IP address
  database: 'petemcnie', // Name of my db, see pgAdmin
  password: 'password', // Password I set
  port: 5433
})

client.connect()
  .then(() => console.log('Connected Successfully'))
  .then(() => client.query('SELECT * FROM matches'))
  .then((response) => console.log(response))
  .catch(err => console.log(err))
  .finally(() => client.end())
