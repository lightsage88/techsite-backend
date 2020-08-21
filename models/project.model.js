module.exports = (sequelize, Sequelize) => {
  const Project = sequelize.define('project', {
    project_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    },
    image: {
      type: Sequelize.BLOB('long')
    },
    mimetype: {
      type: Sequelize.STRING
    },
    summary: {
      type: Sequelize.STRING
    },
    repolink: {
      type: Sequelize.STRING
    },
    projectlink: {
      type: Sequelize.STRING
    },
    technologies: {
      type: Sequelize.STRING,
      get: function() {
        console.log('getting')
        const rawValue = this.getDataValue('technologies')
        return rawValue ? rawValue.toString().split(',') : null
      },
      set: function(val) {
        console.log('setting')
        const rawValue = val
        console.log('whats up val?', val, typeof(val))
        console.log(rawValue.toString())
        // return rawValue ? Object.values(rawValue) : null
        return this.setDataValue({technologies: rawValue.toString()})
      }
    }
  }, {
    timestamps: false
  })

  return Project
}