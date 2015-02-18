var chai = require('chai')
var assert = chai.assert

var gitlog = require('../lib/log')
var logparse = require('../lib/log-parse')

describe('logparse', function () {
  it('should parse a raw log into an array of commit objects', function () {
    gitlog(__dirname, function (error, log) {
      assert.isArray(logparse(log))
      assert.isDefined(logparse(log)[0].commitHash)
    })
  })

  it('should parse dates into date objects', function () {
    gitlog(__dirname, function (error, log) {
      var commits = logparse(log)

      var lastCommitDate = commits[0].committerDate
      var firstCommitDate = commits[commits.length - 1].committerDate

      assert.equal(true, lastCommitDate instanceof Date)
      assert.equal(true, firstCommitDate instanceof Date)
      assert.isAbove(lastCommitDate, firstCommitDate)
    })
  })
})
