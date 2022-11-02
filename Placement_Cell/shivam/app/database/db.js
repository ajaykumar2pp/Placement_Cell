const mongoose = require('mongoose');
exports.connectMonggose =()=>{
    mongoose.connect("mongodb://localhost:27017/passport-forget",
    {
        useNewUrlParser: true
    })
    .then((e)=>console.log("Connected to Mongodb => passport-forget"))
    .catch((e)=>console.log("Not Connect Mongodb"))
}
