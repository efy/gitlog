var chai = require('chai')
var assert = chai.assert
var gitlog = require('../lib/gitlog')

describe('gitlog', function () {

  it('should pass an error if the directory does not exist', function (done) {
    gitlog('./non-existent-dir', function (error, commits) {
      assert.isNotNull(error)
      done()
    })
  })

  it('should pass an error if the directory does not contain a git repo', function (done) {
    gitlog('../test', function (error, commits) {
      assert.isNotNull(error)
      done()
    })
  })

  it('should return an array of commits', function (done) {
    gitlog('./', {}, function (commits) {
      assert.isDefined(commits)
      assert.isArray(commits)
      assert.isTrue(commits.length > 1)
      done()
    })
  })

  it('should execute when no filters are present', function (done) {
    gitlog('./', function (commits) {
      assert.isDefined(commits)
      assert.isArray(commits)
      assert.isTrue(commits.length > 1)
      done()
    })
  })

  it('should return the correct first commit', function (done) {
    gitlog('./', function (commits) {
      var firstCommitMessage = commits[commits.length-1].subject
      assert.equal(firstCommitMessage, 'Init')
      done()
    })
  })
})
