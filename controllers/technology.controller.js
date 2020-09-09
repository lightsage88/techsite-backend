var stream = require('stream')
const db = require('../config/db.config')
const createFileForDB = require('../helperMethods/createFileForDB')

const TechType = db.techtypes
const TechKnown = db.techknowns

exports.retrieveAllTech = (req, res) => {
  TechKnown.findAll()
  .then(techs => {
    res.json(techs)
  })
}

exports.retrieveTechTypes = (req, res) => {
  TechType.findAll()
  .then(techtypes => {
    res.json(techtypes)
  })
}

exports.addTechKnown = (req, res) => {
  const { technologyName, tech_type, tech_website } = req.body.data
  console.log(req.body.data)
  TechKnown.create({
    name: technologyName,
    technology_type_id: tech_type,
    tech_website
  })
  .then(result => {
    res.json(result)
  })
}

exports.uploadFileToTechTable = (req, res) => {
  console.log('updloadFileToTechTable running...', req.body)
  const { id } = req.body
  const file = createFileForDB(req.file)
  console.log('THIS IS THE FILE WE MADE', file)
  TechKnown.upsert({
    tech_id: id,
    image: file.data,
    mimetype: file.type
  })
  .then(result => {
    res.json(result)
  })

}