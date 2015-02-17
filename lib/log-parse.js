
module.exports = function logparse(log) {
  var commitLines = log.split("\n")

  var commits = commitLines.map(function(commit){
    return JSON.parse(commit)
  })
  
  return commits
}
