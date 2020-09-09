require('dotenv').config()
const chai = require('chai')
const expect = chai.expect
const axios = require('axios')
const FormData = require('form-data')
const nock = require('nock')
const responseObject0 = require('./projectsTestResponse0')
const responseObject1 = require('./projectsTestResponse1')
const responseObject2 = require('./projectsTestResponse2')
const chaiNock = require("chai-nock")
const { response } = require('express')

chai.use(chaiNock)

describe('projects /', () => {
  it('should receive a list of our projects', () => {
    const requestNock = nock(process.env.dbURL)
    .get('/projects')
    .reply(200, responseObject0)

    axios.get(process.env.dbURL + '/projects')
    .catch(err => {
      console.error(err)
    })

    expect(responseObject0).to.be.a('array')
    expect(responseObject0[0].name).to.equal("Crosspad")
    expect(responseObject0[1].name).to.equal("Marvelous Bookworm")
    expect(responseObject0[2].name).to.equal("Grab Dat Cat")
    expect(responseObject0[3].name).to.equal("NOC Voice Studio")
    return expect(requestNock).to.have.been.requested
  })
})

describe("/upload", () => {
  it('should upload a project when given the proper info', () => {
    const requestNock = nock(process.env.dbURL)
    .post('/projects/upload')
    .reply(200, responseObject1)

  axios(process.env.dbURL + '/projects/upload', {
    method: "POST",
    data: {
      "apirepoLink": "www.example.com",
      "description": "example to be deleted",
      "projectImage": null,
      "projectLink": "www.example.com",
      "projectName": "Example To be Deleted",
      "repoLink": "www.example.com",
      "technologies": "34618"
    }  
  })
  .catch(err => {
    console.error(err)
  })
  
  let statusCode = requestNock.interceptors[0].statusCode
  expect(statusCode).to.equal(200)
  expect(responseObject1.technologies).to.be.a("array")
  expect(responseObject1.technologies[0]).to.equal('34618')
  expect(responseObject1.project_id).to.equal(308)
  expect(responseObject1.name).to.equal("Example To be Deleted")
  expect(responseObject1.projectlink).to.equal("www.example.com")
  expect(responseObject1.repolink).to.equal("www.example.com")
  expect(responseObject1.apirepolink).to.equal("www.example.com")
  expect(responseObject1.summary).to.equal("example to be deleted")
  return expect(requestNock).to.have.been.requested
  })
})

describe("/projects/uploadProjectPicture", () => {
  it("should apply a picture to a project", () => {
    const requestNock = nock(process.env.dbURL)
    .post("/projects/uploadProjectPicture")
    .reply(200, responseObject2)

    let formData = new FormData()
    formData.append('image', '')
    formData.append('id', 308)
    axios.post(process.env.dbURL + "/projects/uploadProjectPicture", formData, {
      headers: {
        "Content-Headers": "multipart/form-data"
      }
    })
    .catch(err => {
      console.error(err)
    })

    let statusCode = requestNock.interceptors[0].statusCode
    expect(statusCode).to.equal(200)
    console.log(responseObject2)
    expect(responseObject2[0].technologies).to.equal(null)
    expect(responseObject2[0].project_id).to.equal("308")
    expect(responseObject2[0].mimetype).to.equal("image/png")
    expect(responseObject2[0].image).to.be.a("object")
    expect(responseObject2[0].image.type).to.equal("Buffer")
    expect(responseObject2[0].image.data).to.be.a("array")
    expect(responseObject2[0].image.data).to.eql([137,80,78])
    expect(requestNock).to.have.been.requested
  })
})