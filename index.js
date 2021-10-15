const keepAlive = require("./server")
keepAlive()



const fs = require('fs')
const path = require('path')
const {NodeSSH} = require('node-ssh')

const ssh = new NodeSSH()

ssh.connect({
  host: '132.226.202.62',
  username: 'opc',
  privateKey: './rkey.key'
})
/*
 Or
 ssh.connect({
   host: 'localhost',
   username: 'steel',
   privateKey: fs.readFileSync('/home/steel/.ssh/id_rsa', 'utf8')
 })
 if you want to use the raw string as private key
 */
.then(function() {
  // With streaming stdout/stderr callbacks
  ssh.exec('java -jar Lavalink.jar', ['--json'], {
    cwd: '/var/www',
    onStdout(chunk) {
      console.log('stdoutChunk', chunk.toString('utf8'))
    },
    onStderr(chunk) {
      console.log('stderrChunk', chunk.toString('utf8'))
    },
  })
})