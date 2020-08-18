const env = require('./env.js')

const Sequelize = require('sequelize')
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  //TODO: THIS DIALECT MAY BE OFF 
  dialect: env.dialect,
  operatorAliases: false,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.files = require('../models/file.model.js')(sequelize, Sequelize)
db.projects = require('../models/project.model')(sequelize, Sequelize)
db.techtypes = require('../models/tech_type.model')(sequelize, Sequelize)
db.techknowns = require('../models/tech_known.model')(sequelize, Sequelize)

module.exports = db
