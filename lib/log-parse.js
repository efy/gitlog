
module.exports = function logparse(log) {
  var commitLines = log.split("\n")
  
  // Cut the last line to avoid undefined element
  var commitLines = commitLines.slice(0, commitLines.length - 1)

  var commits = commitLines.map(function(commit){
    try {
      return JSON.parse(commit)
    } catch (e){
      return
    }
  })

  return commits
}
