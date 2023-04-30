const {models} = require('../models');

// Crear un  hospital
exports.create = async function (name, city) {
    try{
        let hospital = models.Hospital.build({
            name:name, city:city
        });//Creamos hospital con los datos que nos dan
        hospital = await hospital.save({fields: ["name","city"]}); //Guardar en la base de datos
        console.log('Hospital creado correctamente');//Checkin de todo en orden
        return paciente;//Devolvemos lo creado
    } catch(error){
        console.log(error);
    }  
};

// Devuelve todos los hospitales
exports.index = async function () {
    let hospitales = await models.Hospital.findALL();
    return hospitales;
}

// Filtra los hospitales por ciudad
exports.indexByCity = async function (city) {
    // Rellene aqui ...
}

