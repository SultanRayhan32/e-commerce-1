const http = require('http')
const app = require('../app')

const server = http.createServer(app)
const port = process.env.PORT || 3000;

server.listen(port, function() {
  console.log('jalan di port ', port)
})
