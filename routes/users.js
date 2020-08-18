const express = require('express')
const router = express.Router()
const userWorker = require('../controllers/user.controller')

/* GET users listing. */
router.get('/', userWorker.retrieveAllUsers)
// router.get('/', function(req, res, next) {
//   res.locals.connection.query("SELECT * from users", function(error, results, fields) {
//     if(error) {
//       throw error
//     } else {
//       res.send(JSON.stringify(results))
//     }
//   })
// })

module.exports = router