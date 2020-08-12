const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
  //we select all from the projects table
  res.locals.connection.query(`SELECT * FROM svg_icons`, function(error, results, fields) {
    if(error) {
      throw error
    } else {
      res.send(results)
    }
  })

  //we send that data to the front-end
})

router.post('/upload', function(req, res, next) {
  //we make a variable that contains the name, and svg_icon svg data for a technology
  console.log(req.body)
  const {name, svg_icons} = req.body

  //We make a connection to our MySQL DB and implant the values of the newProject into the database
  // res.locals.connection.query(`SELECT * FROM users WHERE username="${req.body.username}"`, function(error, results, fields) {
  // //??
  // })
  // //we make sure the project has an id number too

  //If successful we send a 200 

  //If there is an error we send a 401 
})



module.exports = router