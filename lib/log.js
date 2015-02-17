var exec = require('child_process').exec

var command = 'git log'

module.exports = function log(cwd, callback) {

  options = {
    cwd: cwd || __dirname
  }

  exec(command, options, function (error, stdout, stderr) {
    if(error){
      callback(error)
    } else {
      callback(null, stdout)
    }
  })
}
