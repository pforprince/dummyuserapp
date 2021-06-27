
const bcrypt= require("bcrypt")
const mongoose= require("mongoose")
const userSchema= mongoose.Schema({
    name:String,
    email:String,
    password:String
})

userSchema.pre("save", async function(){
    this.password= await bcrypt.hash(this.password.toString(), 10);
})

userSchema.methods.matchPassword= async function(enteredPassword){
    return bcrypt.compare(enteredPassword, this.password);
}

module.exports= mongoose.model("User", userSchema)