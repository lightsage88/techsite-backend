require('dotenv').config()
const chai = require('chai')
const expect = chai.expect
const nock = require('nock')
const chaiNock = require("chai-nock")
const responseObject0 = require('./responses/techTestResponse0')
const axios = require('axios')

describe("/", () => {
  it('should request and receive a list of our known tech', () => {
    const requestNock = nock(process.env.dbURL)
    .get('/tech')
    .reply(200, responseObject0)

    axios.get(process.env.dbURL + "/tech")
    .catch(err => {
      console.error(err)
    })
    
    let statusCode = requestNock.interceptors[0].statusCode
    expect(statusCode).to.equal(200)
    expect(responseObject0.length).to.be.greaterThan(8)
    expect(responseObject0.length).to.equal(9)
  })
})