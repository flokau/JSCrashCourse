const mongoose = require('mongoose')

async function main () {
  mongoose.connect('mongodb://localhost/wtmb')
  console.log('connected')
}

main()
