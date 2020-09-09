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
    const {
      projectName, 
      projectImage,
      projectLink, 
      repoLink,
      apirepoLink, 
      description, 
      technologies
    } = req.body.data
    
    console.log('coolgirl', projectName, projectImage, projectLink, repoLink, apirepoLink, description, technologies)

    Project.create({
      name: projectName, 
      // image: projectImage,
      projectlink: projectLink, 
      repolink: repoLink, 
      apirepolink: apirepoLink,
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