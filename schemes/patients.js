const mongoose = require('mongoose')

//importar la clase esquemas (para declarar los esquemas)
const {Schema}= mongoose
const PatientsSchema = new Schema ({
    name: String,
    gender:String,
    document: Number,
    age: Number,
    admissionDate: Number,
    missingLimb: String,
    incidentDate: Number,
    limbId:String,
    dateOfBirth: Number
   
})
// Recibe un string con el nombre del modelo y el esquema como paramentros
const patients=mongoose.model('Patient',PatientsSchema)
module.exports=patients