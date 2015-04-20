# gitlog

A small package for retrieving and working with git logs in javascript

### Installation
`npm install gitlog`

### Usage
```javascript
var gitlog = require('gitlog')

gitlog('./', function (error, commits) {
  if(error) return console.log(error)

  // Commits is an array of commits objects
  commits.forEach(function (commit) {
    console.log(commit.subject)
  })
})
```

### API

### License
[MIT](LICENSE)
