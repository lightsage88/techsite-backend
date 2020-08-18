const express = require('express')
const router = express.Router()
const techWorker = require('../controllers/technology.controller')



router.get('/', techWorker.retrieveAllTech)
router.get('/techTypes', techWorker.retrieveTechTypes)
router.post('/upload', techWorker.addTechKnown)

// router.post('/upload', function(req, res, next) {
//   //we make a variable that contains the name, picture, summary, array of technology objects, repo link, and app link

//   console.log(req.body)
//   const {name, technology_type_id} = req.body
//   res.locals.connection.query(`INSERT INTO technologies_known
//     (name, technology_type_id)
//     VALUES ('${name}', '${technology_type_id}')
//   `, function(error, results, fields) {
//     if(error) {
//       throw error
//     } else {
//       res.send(results)
//     }
//   })
//   //We make a connection to our MySQL DB and implant the values of the newProject into the database
//   //
//   //If there is an error we send a 401 
// })

router.post('/upload/techType/', function(req, res, next) {
  console.log(req.body)
  const {technology_type_id, technology_type_name} = req.body


  res.locals.connection.query(`INSERT INTO technology_types
    (technology_type_name)
    VALUES ('${technology_type_name}')
  `, function(error, results, fields) {
      if(error) {
        throw error
      } else {
        res.send(results)
      }
  })
})



module.exports = router