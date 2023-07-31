const mongoose = require('mongoose')
const Booknowschema = new mongoose.Schema({
    name: {
        type:String,
        required:true
},
email: {
    type:String,
    required:true
},
address: {
    type:String,
    required:true
},
mobile: {
    type:String,
    required:true
},
},{timestamps:true})
const Bookmowmoadel = mongoose.model('booknow',Booknowschema)
module.exports =  Bookmowmoadel