module.exports = (sequelize, Sequelize) => {
  const TechKnown = sequelize.define('techknown', {
    tech_id: {
      type:Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    technology_type_id: {
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    tech_website: {
      type: Sequelize.STRING
    },
    image: {
      type: Sequelize.BLOB('long')
    }
  }, {
    timestamps: false
  })

  return TechKnown
}