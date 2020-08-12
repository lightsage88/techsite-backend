const chai = require('chai')
const chaiHttp = require('chai-http')

const {app, runServer, closeServer} = require('../app')

const expect = chai.expect

chai.use(chaiHttp)

describe("our application", function() {
    before(() => {
        return runServer()
    })

    after(() => {
        return closeServer()
    })
 
    it('should make a request', function(){
        return chai.request(app)
            .get('/')
            .then( res => {
                expect(res).to.have.status(200)
            })
    })
})