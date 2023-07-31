const mongoose = require('mongoose')

const local_url = "mongodb://127.0.0.1:27017/brokersportal"
const live_url = "mongodb+srv://kanchangangil08:gangil9074@cluster0.gxbav2a.mongodb.net/brokerportal?retryWrites=true&w=majority"
const connectDb = ()=>{
    return mongoose.connect(live_url)
    .then(()=>{
        console.log("connected sucessfully");
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports = connectDb