/* eslint-disable no-undef */
const { app } = require('./database/app')
const { port } = require('./config/index')
// mongodb server
const { connectdb } = require('./database/connectdb')
connectdb()




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
