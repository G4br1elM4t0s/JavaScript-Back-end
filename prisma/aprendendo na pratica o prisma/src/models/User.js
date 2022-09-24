import mongoose from "../DataBase";

const UserScheme = new mongoose.Schema({
    name:{
        type: String,
        require:true,
    },
    email:{
        type: String,
        require: true,
        unique:true,
    },
    password:{
        type: String,
        require: true,
    }
})

const User = mongoose.model("User",UserScheme);

export default User;