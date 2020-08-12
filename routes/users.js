const express = require('express')
const bcrypt = require('bcrypt')
const saltrounds = 10
const router = express.Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.locals.connection.query("SELECT * from users", function(error, results, fields) {
    if(error) {
      throw error
    } else {
      res.send(JSON.stringify(results))
    }
  })
})

module.exports = router