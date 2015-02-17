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
})
