const express=require('express')
const mongoose=require('mongoose')
const app=express()
const cors=require('cors')
const port=3001
const userModel=require('./models/Users')
// Cors it is used to pass the data from frontend to the backend
app.use(cors())
app.use(express.json())
//create Api

app.get('/',(req,res)=>{
    userModel.find({})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.post('/createUser',(req,res)=>{
    userModel.create(req.body)
    .then((users)=>{
        res.json(users);
    })
    .catch((err)=>{
            res.json(err)
    })
})


app.put('/updateUser/:id',(req,res)=>{
    const id=req.params.id
    userModel.findByIdAndUpdate({_id:id},{name:req.body.name,email:req.body.email,age:req.body.age})
    .then((users)=>{
        res.json(users);
    })
    .catch((err)=>{
            res.json(err)
    })
})


app.delete('/deleteUser/:id',(req,res)=>{
    const id=req.params.id
    userModel.findByIdAndDelete({_id:id})
    .then((users)=>{
        res.json(users)
    })
    .catch((err)=>{
        console.log(err);
    })
})

app.get('/getUser/:id',(req,res)=>{
    const id=req.params.id
    userModel.findById({_id:id})
    .then((users)=>{
        res.json(users);
    })
    .catch((err)=>{
            res.json(err)
    })
})




mongoose.connect('mongodb://localhost:27017/crud')
.then(()=>{
console.log("connected succesfully to databse");
})
app.listen(port,()=>{
    console.log("Server is running on the "+port);
})