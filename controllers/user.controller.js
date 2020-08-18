const db = require('../config/db.config')
const User = db.users

exports.retrieveAllUsers = (req, res) => {
  User.findAll()
  .then(users => {
    res.json(users)
  })
}