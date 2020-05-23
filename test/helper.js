//This is a file with global definitions of library terms
   //like chai's assert, equal, etc.
   //based off of a stack over flow answer from:
   //https://stackoverflow.com/questions/28191243/how-can-i-make-mocha-load-a-helper-js-file-that-defines-global-hooks-or-utilitie

//testing library/framework items
const chai = require('chai')
const chaiHttp = require('chai-http')
const http = require('http')


module.exports = {
   should: chai.should(),
   request: chai.request,
   chaiHttp,
   createServer: http.createServer(),
   listen: http.listen,
   chai
}