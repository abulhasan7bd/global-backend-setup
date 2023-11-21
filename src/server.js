/* eslint-disable no-undef */
const { app } = require('./database/app')
const { port } = require('./config/index')
// mongodb server
const { connectdb } = require('./database/connectdb')
connectdb()

console.log('abul hasan')
app.listen(port, () => {
  console.log(`Example app listening on${port}`)
})
