var fieldOptions = {
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
  rawBody: "%B",
  commitNotes: "%N"
}

var baseCommand = "git log"
var seperator = "%x09"

module.exports = function logcommand(options) {
  var formatString = generateFormatString(options.fields)
  return baseCommand + ' --pretty="' + formatString + '"'
}

function generateFormatString(fields) {
  var formatString
  var formatObject = {}

  if (fields !== undefined){
    fields.forEach(function (el) {
      if(fieldOptions[el] !== undefined){
          formatObject[el] = fieldOptions[el]
      }
    })
    formatString = JSON.stringify(formatObject)
  } else {
    formatString = JSON.stringify(fieldOptions)
  }

  return formatString
}
