var fieldList = {
  commitHash: "%H",
  abbreviatedCommitHash: "%h",
  treeHash: "%T",
  abbreviatedTreeHash: "%t",
  parentHashes: "%P",
  abbrebiatedParentHashes: "%p",
  authorName: "%an",
  authorEmail: "%ae",
  authorDate: "%ad",
  authorDateUnix: "%at",
  committerName: "%cn",
  committerEmail: "%ce",
  committerDate: "%cd",
  committerDateUnix: "%ct",
  committerDateRelative: "%cr",
  encoding: "%e",
  subject: "%s",
  subjectSanatized: "%f",
  commitNotes: "%N"
}

module.exports = function logcommand() {
  var formatString = generateFormatString()
  return "git log --pretty='" + formatString + "'"
}

function generateFormatString() {
  formatString = JSON.stringify(fieldList)
  return formatString
}
