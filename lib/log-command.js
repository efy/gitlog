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
  rawBody: "%B",
  commitNotes: "%N"
}

var baseCommand = "git log"

module.exports = function logcommand(options) {
  if(options !== undefined) {
    var formatString = generateFormatString(options.fields)
  } else {
    var formatString = generateFormatString()
  }
  return baseCommand + ' --pretty="' + formatString + '"'
}

function generateFormatString(fields) {
  var formatString
  var formatObject = {}

  if (fields !== undefined){
    fields.forEach(function (el) {
      if(fieldList[el] !== undefined){
          formatObject[el] = fieldList[el]
      }
    })
    formatString = JSON.stringify(formatObject)
  } else {
    formatString = JSON.stringify(fieldList)
  }

  return formatString
}
