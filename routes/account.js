var express = require('express')
var bcrypt = require('bcrypt')
const saltrounds = 10
var router = express.Router()

comparePassword = (requestBody, results) => {
    console.log('ssss')
    return bcrypt.compareSync(requestBody.password, results[0].password) === true
}

router.post('/login', function(req, res, next) {
    res.locals.connection.query(`SELECT * FROM users WHERE username="${req.body.username}"`, function(error, results, fields) {
        if (error) {
          throw error
        } else {
          if (results.length > 0) {
            if(comparePassword(req.body, results, req, res)) {
              res.send(JSON.stringify(results))
            } else {
              res.sendStatus(404)
            }
          }
        }
      })
})


module.exports = router