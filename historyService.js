const fs = require('fs')

const historyService = {}

historyService.writeLog = (city, data) => {
  data = data + '\n';
  fs.appendFile(data, `./logs/${city}.txt`, (err) => {
    if (err) console.log(err);
  })
}

module.exports = historyService
