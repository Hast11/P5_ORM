const {models} = require('../models');
const patient = require('../models/patient');

// Muestra la informacion de un paciente
exports.read = async function (patientId) {
   let paciente = await models.Patient.findByPk(patientId);

   return paciente;
}

// Crea un paciente en un hospital
exports.create = async function (hospitalId, name, surname, dni) {
    try{
        let paciente = models.Patient.build({
            name:name, surname:surname, dni:dni, hospitalId:hospitalId
        });//Creamos paciente con los datos que nos dan
        patient = await patient.save({fields: ["name","surname", "dni", "hospitalId"]}); //Guardar en la base de datos
        console.log('Paciente creado correctamente');//Checkin de todo en orden
        return paciente;//Devolvemos lo creado
    } catch(error){
        console.log(error);
    }  
}

// Actualiza un paciente
exports.update = async function (patientId, name, surname, dni) {
    let paciente = await models.Patient.findByPk(patientId);//Buscamos paciente
    paciente.name= name; //Cambiamos datos
    paciente.surname = surname;
    paciente.dni = dni;
    try{
        await paciente.save({fields: ["name", "surname", "dni"]});
        console.log('Paciente actualizado!')
    }catch(error){
        console.log(error);
    }
}

// Borra un paciente
exports.delete = async function (patientId) {
    try{
        await models.Patient.destroy({where:{ //Aniquilar paciente
            id: patientId
        }});
        console.log('Paciente destruido!') //Confirmacion
    }catch(error){
        console.log(error);
    }
}


// Buscar pacientes de un hospital ordenados por el nombre (de la A a la Z)
exports.indexByHospital = async function (hospitalId) {
    let pacientes = await models.Patient.findAll({
        order: ["name"],
        where: {
            hospitalId:hospitalId 
        }
    });
    return pacientes;
}
