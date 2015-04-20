
module.exports = function logparse(log) {
  if (log === '') return []

  var lines = log.split("\n")

  // Cut the last line to avoid undefined element
  lines.pop()

  var commits = lines.map(function(commit){
    try {
      return JSON.parse(commit)
    } catch (e){
      throw new Error('Failed to parse commit log')
      return
    }
  })

  return commits
}
