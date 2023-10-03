require("dotenv").config();
const express=require("express");
const app=express();
const cors = require('cors');
app.use(cors({ origin: true }));
app.use(express.json());
const mongoose=require("mongoose");
const Blogs = require("./models/Blog");
const auth = require("./routes/auth")
const blog = require("./routes/blog")
app.use("/api/auth", auth);
app.use("/api/blog", blog);

const connectDb = async ()=>{
    try{
        console.log(process.env.MONGO_DB_URL)
    const conn= await mongoose.connect(process.env.MONGO_DB_URL);

    console.log('connection successful '+conn.connection.host);
    }catch(err)
    {
        console.log(err);
        process.exit(1);
    }
}
app.get("/api/",(req,res)=>{
    res.send("hello");
})
app.get("/taskslists", async (req,res)=>{
    const blogs= await Blogs.find();
    if(blogs)
    res.json(blogs);
    else
    res.send("There are no blogs available");
})
app.get("/add",async (req,res)=>{
    try{
        await Blogs.insertMany([
            {
              title:"Love Babbar's SDE sheet",
              content:'Here is a collection of problems from Love Babbar sheet using which people have cracked their dream jobs. These questions are commonly asked in product-based companies like Amazon, Microsoft, Google, etc',
            }
          ]);
        res.json("Added succesfully");
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
})
connectDb().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log('server started listening');
    })
}).catch((err)=>{
    console.log(err);
})