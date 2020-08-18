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
  console.log('da body')
  console.log(req.body)
  
  console.log('need to convert the commented code to sequelize speak')
    // //we make a variable that contains the name, picture, summary, array of technology objects, repo link, and app link
    console.log("YOU LOOK CONFUSED BOI")
    const {
      projectName, 
      projectImage,
      projectLink, 
      repoLink, 
      description, 
      languages, 
      framework_frontend, 
      framework_backend, 
      libraries, 
      testing
    } = req.body.projectDetails
    
    Project.create({
      name: projectName, 
      // projectImage,
      projectlink: projectLink, 
      repolink: repoLink, 
      summary: description, 
      languages, 
      framework_frontend, 
      framework_backend, 
      libraries, 
      testing
    })
    .then(result => {
      res.json(result)
    })  
}

exports.uploadFile = (req, res) => {
  console.log('this is where we need to get our picture inserted into the row that was created for the project in the right cell')
}