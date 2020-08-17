const env = {
  database: 'tech_site',
  username: 'root',
  password: 'Walruses8993',
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
 
module.exports = env;
