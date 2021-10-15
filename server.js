const express = require("express")

const server = express()

server.all("/", (req, res) => {
  res.send("Со мной все хорошо(наверное)")
})

function keepAlive() {
  server.listen(3000, () => {
    console.log("Server is ready.")
  })
}

module.exports = keepAlive