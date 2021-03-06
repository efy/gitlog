var exec = require('child_process').exec
var logcommand = require('./log-command')


module.exports = function log(path, callback) {

  var command = logcommand()

  commandOptions = {
    cwd: path || __dirname
  }

  exec(command, commandOptions, function (error, stdout) {
    if(error){
      callback(error)
    } else {
      callback(null, stdout)
    }
  })
}
