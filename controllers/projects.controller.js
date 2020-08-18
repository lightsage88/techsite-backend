const db = require('../config/db.config')
const Project = db.projects
const File = db.files

exports.retrieveAllProjects = (req, res) => {
  Project.findAll()
  .then(projects => {
    res.json(projects)
  })
}

exports.deleteProject = (req, res) => {
  Project.destroy({where: {
    project_id: req.body.project_id
  }})
  .then(result => {
    res.json(result)
  })
}

exports.uploadProject = (req, res) => {
  console.log('da file')
  console.log(req.file)
  console.log('da body')
  console.log(req.body)
  
  console.log('need to convert the commented code to sequelize speak')
    // //we make a variable that contains the name, picture, summary, array of technology objects, repo link, and app link
    // console.log("YOU LOOK CONFUSED BOI", req.body.projectDetails.projectImage)
    // const {
    //   projectName, 
    //   projectImage,
    //   projectLink, 
    //   repoLink, 
    //   description, 
    //   languages, 
    //   framework_frontend, 
    //   framework_backend, 
    //   libraries, 
    //   testing
    // } = req.body.projectDetails
    
  
    // //We make a connection to our MySQL DB and implant the values of the newProject into the database
    // res.locals.connection.query(`INSERT INTO projects (name, picture, summary, repolink, projectlink, backgroundpic, languages, framework_frontend, framework_backend, libraries, testing) 
    // VALUES ('${projectName}', '${projectImage}', '${description}', '${repoLink}', '${projectLink}', ${null}, JSON_ARRAY('${languages}'), JSON_ARRAY('${framework_frontend}'), JSON_ARRAY('${framework_backend}'), JSON_ARRAY('${libraries}'), JSON_ARRAY('${testing}'))`, function(error, results, fields) {
    //   if(error) {
    //     throw error
    //   } else {
    //     res.send(results)
    //   }
    // })
    // //we make sure the project has an id number too
  
    // //If successful we send a 200 
  
    // //If there is an error we send a 401 
  
}

exports.uploadFile = (req, res) => {
  console.log('this is where we need to get our picture inserted into the row that was created for the project in the right cell')
}