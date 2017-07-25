const express = require('express')
const app = express()
const data = require('./data.js')

const mustacheExpress = require('mustache-express')

app.use(express.static('public'))

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')
