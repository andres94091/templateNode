//Conexión a la base de datos
const mongo = require('../../../services/mongo')

//definición de funciones para consultar base de datos
const getAllPatients=async()=>{
    const patient=mongo.collection('patientData')
    const answer=await patient.findAll()
    return answer
}

module.exports={
    getAllPatients
}