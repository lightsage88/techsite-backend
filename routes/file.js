const express = require('express')
const router = express.Router()
const multer = require('multer')
const fileWorker = require('../controllers/file.controller.js')
// var upload = require('../app')
var upload = multer({dest: './upload'})

router.post('/upload', upload.single('uploadfile'), fileWorker.uploadFile)
router.get('/getall', fileWorker.listAllFiles)
router.get('/:id', fileWorker.downloadFile)

// app.use('/',router);
 
//   app.use('*', (req,res) => {
//     res.sendFile(path + "404.html");
//   });

module.exports = router