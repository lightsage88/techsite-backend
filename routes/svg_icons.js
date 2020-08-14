const express = require('express')
const router = express.Router()
const fs = require('fs')

var solidSnake = {
  img: fs.readFileSync("./resources/static/assets/icons/Snake.png"),
  file_name: "Snake"
}

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

router.post('/snake', function(req, res, next) {
  console.log('never give up')
  console.log(solidSnake, res.body)
  res.locals.connection.query(`INSERT INTO imageLesson SET ?`, solidSnake, function(err, result) {
    console.log(result)
  })
})



module.exports = router