const express = require('express')
const router = express.Router()
const multer = require('multer')
const db = require('../config/db.config')
const projectWorker = require('../controllers/projects.controller.js')
const fs = require('fs')
var storage = multer.memoryStorage()
var upload = multer({storage: storage})

router.get('/', projectWorker.retrieveAllProjects)
router.post('/upload', projectWorker.uploadProject)
router.post('/uploadProjectPicture', upload.single('image'), projectWorker.uploadFileToProjectTable)
router.post('/delete', projectWorker.deleteProject)

module.exports = router