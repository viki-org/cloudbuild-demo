'use strict';

// Dependencies
const express = require('express')
const app = express()
const path = require('path')
const router = require(path.resolve('server-assets/routes'))

app.set('view engine', 'ejs')
app.use("/public", express.static(path.join(__dirname, 'public')));
app.use("/scripts", express.static(path.join(__dirname, 'client-assets')));
app.use('/', router)

const port = 8080;
app.listen(port, () => {
  console.log(`Listening to port: ${port}`)
})
