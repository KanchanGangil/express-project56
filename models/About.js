const mongoose = require ('mongoose')

const Aboutschema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    }
    


},{timestamps:true})
const AboutModel = mongoose.model('about',Aboutschema)

module.exports = AboutModel