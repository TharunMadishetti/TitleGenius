const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const blogSchema = new Schema({
    content:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    }
})
module.exports = mongoose.model("Blog",blogSchema);