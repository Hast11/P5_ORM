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
Hospital.hasMany(Patient,{as: 'patient', foreignKey: 'hospitalID'});
Patient.belongsTo(Hospital, {as: 'hospital', foreignKey: 'hospitalID'});

Doctor.belongsToMany(Patient, {through: 'Doctors_Patients'});
Patient.belongsToMany(Doctor, {through: 'Doctor_Patients'});

module.exports = exports = sequelize;
