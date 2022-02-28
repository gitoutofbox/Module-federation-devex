const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sequelize', 'root', '', {
  host: 'localhost',
  dialect: 'sqlite', //'sqlite',/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  storage: './database/ignite.db'
});

sequelize.authenticate()
  .then(() => console.log("DB connected"))
  .catch(error => console.log(error));

const db = {}
db.sequelize = sequelize;


db.Client = require("../models/Client")(sequelize, DataTypes)
db.Account = require("../models/Account")(sequelize, DataTypes)
db.StockOptions = require("../models/StockOptions")(sequelize, DataTypes)
db.AccountDistribution = require("../models/AccountDistribution")(sequelize, DataTypes)

/* key mapping for client-account */
db.Client.hasMany(db.Account, {
  as: 'accounts',
  foreignKey: 'clientId',
  onDelete: 'CASCADE',
  hooks: true
});
db.Account.belongsTo(db.Client);

db.Account.belongsToMany(db.StockOptions, {
  through:  db.AccountDistribution,
  as: 'distribution',
  foreignKey: 'accountId',
  // otherKey: 'stockOptionId',
  onDelete: 'CASCADE',
  hooks: true
});

module.exports = db;