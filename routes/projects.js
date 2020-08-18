const express = require('express')
const router = express.Router()
const multer = require('multer')
const db = require('../config/db.config')
const projectWorker = require('../controllers/projects.controller.js')
const fs = require('fs')
// const storage = multer.diskStorage({
//   destination: './',
//   filename: function(req, file, cb){
//     console.log('shit', file)
//     cb(null, Date.now() + '.' + file.mimetype.split('/')[1])
//   }
// })
var upload = multer({dest: './upload'})

router.get('/', projectWorker.retrieveAllProjects)
router.get('/uploadProjectPicture', upload.single('uploadfile'), projectWorker.uploadFile)
router.post('/upload', upload.single('image'), projectWorker.uploadProject)
router.post('/delete', projectWorker.deleteProject)

module.exports = router