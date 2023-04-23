const Sequelize = require('sequelize');

const url = process.env.DATABASE_URL || "sqlite:p5.sqlite";

const sequelize = new Sequelize("sqlite:db.sqlite",{logging:false})


// Import Models

// Rellene aqui ...


// Relationships

// Rellene aqui ...


module.exports = exports = sequelize;
