const express = require('express')
const router = express.Router()
const userWorker = require('../controllers/user.controller')

/* GET users listing. */
router.get('/', userWorker.retrieveAllUsers)
router.post('/login', userWorker.loginUser)

module.exports = router