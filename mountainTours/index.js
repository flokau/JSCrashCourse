const express = require('express')
const bodyParser = require('body-parser')

const mountainRouter = require('./routes/mountain')
const mountaineerRouter = require('./routes/mountaineer')
const trailRouter = require('./routes/trail')
const hutRouter = require('./routes/hut')

require('./mongo-connection')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.use('/mountain', mountainRouter)
app.use('/mountaineer', mountaineerRouter)
app.use('/trail', trailRouter)
app.use('/hut', hutRouter)

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000, () => {
  console.log('Server listening')
})
