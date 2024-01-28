const mongoose = require("mongoose")


const schema =  mongoose.Schema({
    name :{
        type:String,
        require:true
    },
    email: {
        type:String,
        require:true
    },
    password:{
        type:Number,
        require: true
    },
    CreatedOn :{
        type:Date,
        default:Date.now()
    }
    
})

 const userSchema =mongoose.model("user",schema)

module.exports = userSchema