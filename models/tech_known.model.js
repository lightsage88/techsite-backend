const TechType = require('./tech_type.model')

module.exports = (sequelize, Sequelize) => {
  const TechKnown = sequelize.define('techknown', {
    name_id: {
      type:Sequelize.INTEGER,
      primaryKey: true
    },
    technology_type_id: {
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    }
  }, {
    timestamps: false
  })

  return TechKnown
}