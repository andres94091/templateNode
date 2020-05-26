const mongoose = require('mongoose')

const {Schema}= mongoose
const Limb= new Schema({
    limbName: String
})
const limbModel = mongoose.model ('Limb', Limb)
module.exports=limbModel
