const User= require("../models/UserModel")

const saveUser= async(req, res)=>{
    try {
        const {email, name, password}= req.body
        const userExists= await User.findOne({email})

        if(userExists){
          return  res.status(400).json({message:"User Already exists", data:[]})
        }
        const user = new User(req.body);
        const savedUser= await user.save()
        res.status(201).json({message:"Success", data:[savedUser]})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Something went wrong", data:[]})
    }
}

const loginUser= async(req, res)=>{
    try {
        const {email, password}= req.body

        const user = await User.findOne({email})
        if(user && ( user.matchPassword(password))){
            res.status(200).json({message:"Success", data:[user]})
        }
        const savedUser= await user.save()
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Something went wrong", data:[]})
    }
}




module.exports={saveUser, loginUser}