const express = require('express')

const router= express.Router()

//Importo el controller
const patientsRead= require('../controller/read')
const patientsCreate= require('../controller/create')


//Get puro (Hola mundoooo)

router.get('/hola',(req,res)=>{
    res.status(200).json({message:'Hola mundo'})
})
router.get('/get_all_patients',(req, res)=>{
    patientsRead.getPatients(res)
})
router.post('/create_patient',(req, res)=>{
    patientsCreate.patientCreated(req.body, res)
})

module.exports= router