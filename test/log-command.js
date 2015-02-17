var chai = require('chai')
var assert = chai.assert

var logcommand = require('../lib/log-command.js')

describe("logcommand", function () {
  it("should return a string", function () {
    assert.isString(logcommand())
  })

  it("should return the command string for the fields specified", function () {
    var actualCommand = logcommand({
      fields: ["commitHash", "committerName", "committerDateUnix"]
    })
    assert.include(actualCommand, "commitHash")
    assert.include(actualCommand, "committerName")
    assert.include(actualCommand, "committerDateUnix")
  })
})
