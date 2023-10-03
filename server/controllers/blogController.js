const { trusted, default: mongoose } = require("mongoose");
const Blogs = require("../models/Blog");
const User = require("../models/userModel");
require("dotenv").config();
module.exports.getMyBlogs = async (req, res, next) => {
  try {
    const {  user } = req.body;
    res.json({message:"get all blogs req"});
    // if(!user)
    // return res.json({status:false,message:"Please login/register to access the app"})
    // const requester  = await Users.findOne({_id:{$eq:user._id}});
    // if(!requester)
    // return res.json({message:"you aren't authorized to make this action",status:false});
    // const promises = []
    // requester.mylists.map(async (id) =>{
    //   promises.push(Lists.find({
    //   _id: {
    //     $eq: id,
    //   }
    //   })
    //   .then((res)=>{
    //     return res;  
    //   }).catch((err)=>{
    //     return res.json({status:false,message:err})
    // }))
//   })
//   const lists = []
//   const results =await Promise.all(promises);
//   results.forEach(l=>lists.push(l[0]));

//   return res.json({status:true,lists,user});
  } catch (ex) {
    next(ex);
  }
};

module.exports.addBlog = async (req, res, next) => {
  try {
    const { user } = req.body;

//     if(!user)
//     res.json({status:false,message:"Please login/register to access the app"})
//     const { listname, description,tasks} = req.body;
//     const addedList = await Lists.create({
//         listname,
//         description,
//         tasks,
//         users:[user._id],
//         owner:user._id,
//     });

//     if (addedList)
//     return res.json({ message: "List added successfully ",status:false });
//     else  
    return res.json({ message: "Failed to add List to the database.Try again" ,status:false});
  } catch (ex) {
    next(ex);
  }
};
