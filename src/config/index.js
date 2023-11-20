/* eslint-disable no-undef */
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT
const database = process.env.DATABASE
module.exports = { port, database }
