const Patient = require('../../../schemes/patients')


const createPatient= async(data)=>{
   const newPatient= new Patient(data)
   return await newPatient.save()
}

module.exports={
    createPatient
}