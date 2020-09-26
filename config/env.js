//Uncomment for Dev
// const env = {
//   database: 'tech_site',
//   username: 'root',
//   password: 'Walruses8993',
//   host: 'localhost',
//   dialect: 'mysql',
//   pool: {
//     max: 10,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// };
 
//Uncomment for Production
const env = {
  database: 'adrianr1_techSite',
  username: 'adrianr1_develop',
  password: 'Walruses8',
  host: 'giow2.siteground.us',
  dialect: 'mysql',
  pool: {
    max: 100,
    min: 0,
    acquire: 300000,
    idle: 100000
  }
};

module.exports = env;
