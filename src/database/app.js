/* eslint-disable no-undef */
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

app.use(express.json())

// health route

app.get('/health', (req, res) => {
  res.status(201).json({
    status: 'succes',
  })
})

module.exports = { app }
