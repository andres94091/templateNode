const patientModelCreate = require('../model/create')
const limbModelCreate = require('../../limbs/model')

async function patientCreated(data, res) {
    data.limbId = await limbByName(data.missingLimb)
    console.log(data);
    
    const answer =  await patientModelCreate.createPatient(data)
    res.status(200).json({message:'Paciente creado correctamente', data:answer})
}

async function limbByName(name) {
    const limbData = await limbModelCreate.getLimbByName(name)
    console.log(limbData);
    
    return limbData._id
}

module.exports={
    patientCreated
}
