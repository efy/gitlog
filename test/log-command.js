var chai = require('chai')
var assert = chai.assert

var logcommand = require('../lib/log-command.js')

describe("logcommand", function () {
  it("should return a string", function () {
    assert.isString(logcommand())
  })

  it("should return the correct command string", function () {
    var actualCommand = logcommand()
    assert.include(actualCommand, "commitHash")
    assert.include(actualCommand, "committerName")
    assert.include(actualCommand, "committerDateUnix")
  })
})
