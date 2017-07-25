const express = require('express')
const app = express()
const data = require('./data.js')

const mustacheExpress = require('mustache-express')

app.use(express.static('public'))

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

app.get('/', (req, res) => {
	res.render('index', data)
})

app.listen(7777, function() {
	console.log('Looking good Billy Ray!!!')
})
