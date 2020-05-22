const patientsModel=require('../model/read')

const getPatients=async(res)=>{
    const patients= await patientsModel.getAllPatients()
    res.status(200).json({message:'Estos son todos los pacientes', data:patients})
}

module.exports={
    getPatients
}