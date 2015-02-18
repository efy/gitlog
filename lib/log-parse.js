
module.exports = function logparse(log) {
  var lines = log.split("\n")

  // Cut the last line to avoid undefined element
  var lines = lines.slice(0, lines.length - 1)

  var commits = lines.map(function(commit){
    try {
      return JSON.parse(commit)
    } catch (e){
      return
    }
  })

  return commits
}
