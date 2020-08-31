const db = require('../config/db.config')
const User = db.users
const bcrypt = require('bcrypt')
const saltrounds = 10

const comparePassword = (requestBody, hash) => {
  return bcrypt.compareSync(requestBody.password, hash) === true
}

exports.retrieveAllUsers = (req, res) => {
  User.findAll()
  .then(users => {
    res.json(users)
  })
}

exports.loginUser = (req, res) => {
  console.log('loginUser Running', req.body)
  const { username } = req.body
  User.findOne({
    username
  })
  .then(result => {
    const dbPassword = result.dataValues.password
    if(comparePassword(req.body, dbPassword)) {
      res.send(JSON.stringify(result))
    } else {
      res.sendStatus(404)
    }
  })
}