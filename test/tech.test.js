require('dotenv').config()
const chai = require('chai')
const expect = chai.expect
const nock = require('nock')
const chaiNock = require("chai-nock")
const responseObject0 = require('./responses/techTestResponse0')
const responseObject1 = require('./responses/techTestResponse1')
const axios = require('axios')

chai.use(chaiNock)

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

describe("/techTypes", () => {
  it('should return techTypes', () => {
    const requestNock = nock(process.env.dbURL)
    .get('/tech/techTypes')
    .reply(200, responseObject1)

    axios.get(process.env.dbURL + '/tech/techTypes')
    .catch(err => {
      console.error(err)
    })

    let statusCode = requestNock.interceptors[0].statusCode
    expect(statusCode).to.equal(200)
    expect(responseObject1[0].technology_type_id).to.equal(1)
    expect(responseObject1[0].technology_type_name).to.equal("language")
    expect(responseObject1[1].technology_type_id).to.equal(2)
    expect(responseObject1[1].technology_type_name).to.equal("front-end framework")
    expect(responseObject1[2].technology_type_id).to.equal(3)
    expect(responseObject1[2].technology_type_name).to.equal("back-end framework")
    expect(responseObject1[3].technology_type_id).to.equal(4)
    expect(responseObject1[3].technology_type_name).to.equal("library")
    expect(responseObject1[4].technology_type_id).to.equal(5)
    expect(responseObject1[4].technology_type_name).to.equal("testing library")
    expect(responseObject1[5].technology_type_id).to.equal(6)
    expect(responseObject1[5].technology_type_name).to.equal("ui framework")
    expect(responseObject1[6].technology_type_id).to.equal(7)
    expect(responseObject1[6].technology_type_name).to.equal("content management system")
    expect(responseObject1[7].technology_type_id).to.equal(8)
    expect(responseObject1[7].technology_type_name).to.equal("database")
    expect(responseObject1[8].technology_type_id).to.equal(9)
    expect(responseObject1[8].technology_type_name).to.equal("continuous integration")
    return expect(requestNock).to.have.been.requested
  })
})