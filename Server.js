const express = require('express');
const mongoose =  require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Schema Creation
const schemaData = mongoose.Schema({
    userName:String,
    district:String,
    state:String,
    country:String,
},{timestamps:true})

// Create User Model
const userModel = mongoose.model('user',schemaData);

// API Code

// Get Method
app.get('/',async(req,res)=>{
    const data = await userModel.find({})
    res.json({success:true,data:data})
})

// Post Method
app.post('/create',async(req,res)=>{
    const data =new userModel(req.body)
    await data.save()
    res.send({success:true,message:"Your Data was Successfully Added",data:data})
})

app.delete('/delete/:id',async(req,res)=>{
    const _id = req.params.id;
    const data = await userModel.deleteOne({_id:_id})
    res.send({success:true,message:"Your Data was Successfully Deleted"})
})

// MongoDB Connection
mailto:mongoose.connect("mongodb+srv://sanjheyhariramcse1923:zrava_123@zravamerninterviewdb.chowbdj.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("Database Connected Successfully")
}).catch((err)=>{console.log(err)})

// App Listen on the PORT
app.listen(2324,()=>{
    console.log("Server Started")
})