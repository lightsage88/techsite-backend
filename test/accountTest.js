require('dotenv').config()
const chai = require('chai')
const chaiHttp = require('chai-http')
const {app, runServer, closeServer} = require('../app')
const expect = chai.expect

chai.use(chaiHttp)

describe("the account router", function() {
  before(() => {
    return runServer()
  })

  after(() => {
    return closeServer()
  })

  it('should fail when it receives an invalid item', (done) => {
    const loginItem = { username: "user", password: "password" }
    
    return chai.request(app)
      .post('/account/login')
      .send(loginItem)
      .then(res => {
        expect(res).not.to.have.status(200)
      })
      .then(done())
  })

  it('should succeed when it receives a valid item', () => {
    const loginItem = { username: process.env.usernameString, password: process.env.password }
    
    return chai.request(app)
      .post('/account/login')
      .send(loginItem)
      .then(res => {
        expect(res).to.have.status(200)
      })
  })
})