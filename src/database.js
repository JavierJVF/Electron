const { Sequelize} = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'C:\Users\User\Desktop\sqlite\SistemaCuotas.sqlite'
  });

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

const db = {};
db.Hogares = require('./Model/Hogares.js')(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;

/*(async () => {
    await sequelize.sync({ force: true });
    // Code here
  })();*/

