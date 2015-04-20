var logparse = require('./log-parse')
var logexec = require('./log-exec')

var gitlog = function (dirname, filters, callback) {

  // Make filters param optional
  if (!callback) callback = filters

  logexec(dirname, function (error, rawlog) {
    if(error !== null) return callback(error)

    var commits = logparse(rawlog)
    callback(commits)
  })
}

module.exports = gitlog
