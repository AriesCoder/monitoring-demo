const express = require('express')
const path = require('path')
const app = express()
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: 'a0ddf4b9e3604ccf8ea86d4505f5d869',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')


const port = process.env.PORT || 4545

app.listen(port, ()=>{ console.log(`take us to warp ${port}`)})