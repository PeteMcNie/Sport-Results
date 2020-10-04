const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'matches',
  password: 'password',
  port: 3000
})

module.exports = pool
