const db = require('../config/db.config')
const createFileForDB = require('../helperMethods/createFileForDB')

const Project = db.projects

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
      technologies
    } = req.body.data
    
    console.log('coolgirl', projectName, projectImage, projectLink, repoLink, description, technologies)

    Project.create({
      name: projectName, 
      // image: projectImage,
      projectlink: projectLink, 
      repolink: repoLink, 
      summary: description,
      technologies: technologies 
    })
    .then(result => {
      console.log('sdfsfsds')
      console.log(result)
      res.json(result)
    })  
}

exports.uploadFileToProjectTable = (req, res) => {
  console.log('CHICKEN SHROOMS ARE GUD', req.body)
  console.log('Bisquick dumpings', req.file)
  const { id } = req.body
  const file = createFileForDB(req.file)
  console.log('this is the file', file)
  Project.upsert({
    project_id: id,
    image: file.data,
    mimetype: file.type
  })
  .then(result => {
    res.json(result)
  })
}