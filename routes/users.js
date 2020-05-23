var express = require('express')
var bcrypt = require('bcrypt')
const saltrounds = 10
var router = express.Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.locals.connection.query("SELECT * from users", function(error, results, fields) {
    // if(error) throw error
    // res.send(JSON.stringify(results))

    if(error) {
      throw error
    } else {
      res.send(JSON.stringify(results))
    }
  })
})

/* POST create user */
router.post('/createAccount', function(req, res, next) {
  console.log(req, req.body)
})



module.exports = router;
