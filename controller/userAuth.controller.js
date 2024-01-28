const User = require("../models/user.model")

// get register 
const getRegister = (req,res)=>{
    res.send("i am register pages")
}

//post register
const postRegister = async (req,res)=>{
    // const {name,email,password} = req.body
    try{
        let newUser  = new User(req.body)
        newUser.save()
       await res.send(newUser)
    }catch(error){
        console.log("server error");
    }
}
// get login
const postLogin = async (req,res)=>{
    try{
        const {email,password} = req.body
        const user = await User.findOne({email:email})
        if(user && user.password == password){
            res.status(200).send("user is valid")
        }else{
            res.send("user is not valid")
        }
    }catch(error){
        console.log('error hear');
    }
}
module.exports = {getRegister,postLogin,postRegister}