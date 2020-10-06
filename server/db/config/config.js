module.exports = {
  development: {
    url: process.env.DEV_DATABASE_URL,
    dialect: 'postgres',
    username: 'me',
    password: 'password',
    database: 'dev_db',
    host: '127.0.0.1',
    port: '5432'
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: 'postgres'
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres'
  }
}
