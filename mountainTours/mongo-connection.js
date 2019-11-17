const mongoose = require('mongoose')

async function main () {
  mongoose.connect('mongodb://localhost/mountainTours', { useNewUrlParser: true, useUnifiedTopology: true })
  console.log('connected')
}

main()
