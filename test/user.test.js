require('dotenv').config()
const chai = require('chai')
const expect = chai.expect
const nock = require('nock')
const chaiNock = require("chai-nock")
const responseObject = require('./responses/userTestResponse200')
const responseObject0 = require('./responses/userTestResponse0')
const axios = require('axios')

chai.use(chaiNock)

describe('users /', () => {
  it('should request and receive a list of our users', () => {
    const requestNock = nock(process.env.dbURL)
    .get('/users')
    .reply(200, responseObject0)

    axios.get(process.env.dbURL + '/users')
    .catch(err => {
      console.error(err)
    })

    let statusCode = requestNock.interceptors[0].statusCode
    expect(statusCode).to.equal(200)
    expect(responseObject0[0].id).to.equal(8)
    expect(responseObject0[0].username).to.equal("SaulGoodman")
    expect(responseObject0[0].password).to.equal("lwyrup")
    expect(responseObject0[0].email).to.equal("saul@good.io") 
    return expect(requestNock).to.have.been.requested
  })
})

describe('users/login endpoint tests', () => {
  it('should succeed when it receives a proper login', () => {
    const requestNock = nock(process.env.dbURL)
    .post('/users/login')
    .reply(200, responseObject);

    axios.post(process.env.dbURL + '/users/login', {
      username: "realUsername",
      password: "realPassword"
    })  
    .catch(err => {
      console.error(err)
    })
   
    let statusCode = requestNock.interceptors[0].statusCode
    expect(responseObject.id).to.equal(2)
    expect(statusCode).to.equal(200)
    expect(responseObject.username).to.equal("admin")
    expect(responseObject.password).to.equal("password")
    expect(responseObject.email).to.equal("admin@gmail.com")
    return expect(requestNock).to.have.been.requestedWith({username: "realUsername", password: "realPassword"})
  })

  it("fails when you enter a wrong login", () => {
    let statusCode
    const requestNock = nock(process.env.dbURL)
    .post('/users/login')
    .reply(404);

    axios.post(process.env.dbURL + '/users/login', {
      username: "badUsername",
      password: "badPassword"
    })
    .catch(err => {
      // console.error(err)
    })

    statusCode = requestNock.interceptors[0].statusCode
    expect(statusCode).to.equal(404)
    return expect(requestNock).to.have.been.requestedWith({username:"badUsername", password: "badPassword"})
  })
})