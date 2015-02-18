var chai = require('chai')
var assert = chai.assert

var log = require('../lib/log-exec.js')

describe("log", function () {
  it("should return a string", function () {
    log(__dirname, function (error, gitlog) {
      assert.isString(gitlog)
    })
  })

  it("should throw an error if no repo exists", function () {
    log('~/non/existent/repo', function (error, gitlog) {
      assert.isNotNull(error)
    })
  })
})
