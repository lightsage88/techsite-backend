module.exports = (sequelize, Sequelize) => {
  const TechType = sequelize.define('techtype', {
    technology_type_id: {
      type:Sequelize.INTEGER,
      primaryKey: true
    },
    technology_type_name: {
      type: Sequelize.STRING
    }
  }, {
    timestamps: false
  })

  return TechType
}