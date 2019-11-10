const fs = require('fs')

const save = function (filename, data) {
  fs.writeFile(filename, JSON.stringify(data))
}

const load = function (filename, callback) {
  fs.readFile(filename, 'utf8', (err, file) => {
    callback(err, JSON.parse(file))
  })
}

module.exports = { save, load }
