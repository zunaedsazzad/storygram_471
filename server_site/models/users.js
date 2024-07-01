const mongoose= require('mongoose')

const UsersSchema= new mongoose.Schema({
    name: String,
    email: String,
    Password:String
})

const Usersmodel=mongoose.model("users", UsersSchema)
module.exports=Usersmodel