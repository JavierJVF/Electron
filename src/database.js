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
db.Lideres_hogar = require('./Model/Lideres_hogar.js')(sequelize, Sequelize);
db.Pagos = require('./Model/Pagos.js')(sequelize, Sequelize);
db.Pagos_electronicos = require('./Model/Pagos_electronicos.js')(sequelize, Sequelize);
db.Mensualidades = require('./Model/Mensualidades.js')(sequelize, Sequelize);
db.Reparaciones = require('./Model/Reparaciones.js')(sequelize, Sequelize);
db.Contribuciones = require('./Model/Contribuciones.js')(sequelize, Sequelize);
db.Pagos_mensualidades = require('./Model/Pagos_mensualidades.js')(sequelize, Sequelize);
db.Pagos_reparaciones = require('./Model/Pagos_reparaciones.js')(sequelize, Sequelize);
db.Pagos_contribuciones = require('./Model/Pagos_contribuciones.js')(sequelize, Sequelize);

db.Hogares.associate(db);
db.Lideres_hogar.associate(db);
db.Pagos.associate(db);
db.Pagos_electronicos.associate(db);
db.Mensualidades.associate(db);
db.Reparaciones.associate(db);
db.Contribuciones.associate(db);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;

/*try {
  (async () => {
    await sequelize.sync({ force: true });
    // Code here
  })();
  
} catch (error) {
  
}
*/

