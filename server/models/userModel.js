const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        min: 3,
        max: 20,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        max: 50,
    },
    password:{
        type:String,
        required:true,
        min:8,
    },
    myblogs:{
        type:Array(mongoose.Types.ObjectId),
    },
})
module.exports = mongoose.model("User",userSchema);