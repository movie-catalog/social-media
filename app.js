const express = require('express')
const mysql = require("mysql")
const app = express()
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "social_media"
})

//load modules
const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const engines = require('consolidate')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))


var userRouter = require('./user')
app.use('/user', userRouter)

//port configuration
const server = app.listen(3000,() => {
  console.log(`server running at http://localhost:${server.address().port}`);
})
