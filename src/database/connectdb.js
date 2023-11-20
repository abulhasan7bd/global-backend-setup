/* eslint-disable no-undef */
const mongoose = require('mongoose')
const { database } = require('../config/index')
const connectdb = async () => {
  try {
    mongoose.connect(database)
    console.log('Mongodb connect succesfull[Mongodb]')
  } catch (err) {
    console.log('Not connect Mongodb', err)
  }
}
module.exports = { connectdb }
