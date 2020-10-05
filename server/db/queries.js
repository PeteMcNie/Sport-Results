const { Client } = require('pg')
const client = new Client({
  user: 'postgres', // Also found in pgAdmin, master folder before db folder I named
  host: 'localhost', // Server name or IP address
  database: 'petemcnie', // Name of my db, see pgAdmin
  password: 'password', // Password I set
  port: 5433
})

function getMatches (req, res) {
//   client.connect()
//     .then(() => console.log('Connected Successfully'))
//     .then(() => client.query('SELECT * FROM matches'))
//     .then((response) => console.log(response.fields))
//     .catch(err => console.log(err))
//     .finally(() => client.end())
}

module.exports = {
  getMatches
}
