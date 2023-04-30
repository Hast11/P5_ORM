const Sequelize = require('sequelize');

const url = process.env.DATABASE_URL || "sqlite:p5.sqlite";

const sequelize = new Sequelize("sqlite:db.sqlite",{logging:false})


// Import Models

// Rellene aqui ...
const Patient = require('./patient')(sequelize, Sequelize.DataTypes);
const Hospital = require('./hospital')(sequelize, Sequelize.DataTypes);
const Doctor = require('./doctor')(sequelize, Sequelize.DataTypes);

// Relationships

// Rellene aqui ...


module.exports = exports = sequelize;
