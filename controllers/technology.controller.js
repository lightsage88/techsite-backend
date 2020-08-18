const db = require('../config/db.config')
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
  const { name, technology_type_id } = req.body
  console.log(name, technology_type_id)
  TechKnown.create({
    name,
    technology_type_id
  })
  .then(result => {
    res.json(result)
  })
}