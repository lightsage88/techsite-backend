// const express = require('express')
// const bcrypt = require('bcrypt')
// const saltrounds = 10
// const router = express.Router()

// comparePassword = (requestBody, results) => {
//   return bcrypt.compareSync(requestBody.password, results[0].password) === true
// }

// router.post('/login', function(req, res, next) {
// //Todo: Use of this will require Sequelizing Accounts
//   const username = req.body.username
//   console.log(username)
//   res.locals.connection.query(`SELECT * FROM users WHERE username=${username}`, function(error, results, fields) {
//     if (error) {
//       throw error
//     } else {
//       if (results.length > 0) {
//         if(comparePassword(req.body, results, req, res)) {
//           res.send(JSON.stringify(results))
//         } else {
//           res.sendStatus(404)
//         }
//       }
//     }
//   })
// })

// module.exports = router