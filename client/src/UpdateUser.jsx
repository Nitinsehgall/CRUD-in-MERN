import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams ,useNavigate } from 'react-router-dom'

function UpdateUser() {
  const {id}=useParams()
  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [age,setAge]=useState()
  const navigate=useNavigate()


  useEffect(()=>{
    axios.get('http://localhost:3001/getUser/'+id)
    .then((result)=>{
        setName(result.data.name)
        setEmail(result.data.email)
        setAge(result.data.age)
       
    } )
    .catch((e)=>console.log("Error occured"+e))
},[])
  
const update=(e)=>{
e.preventDefault()
axios.put('http://localhost:3001/updateUser/'+id,{name,email,age})
.then((result)=>{
  console.log(result)
  navigate('/')
})
.catch(err=>console.log(err))
}
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
    <div className="w-50  p-3 rounded-5 bg-white">
      <form onSubmit={update}>
        <h2>Add user</h2>
        <div className="mb-2">
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            className="form-control"
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
            />
        </div>
        <div className="mb-2">
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="Enter Email"
            className="form-control"
            value={email}
            
            onChange={(e)=>{setEmail(e.target.value)}}
            />
        </div>
        <div className="mb-2">
          <label htmlFor="">Age</label>
          <input
            type="text"
            placeholder="Enter Age"
            className="form-control"
            value={age}
            
            onChange={(e)=>{setAge(e.target.value)}}
          />
        </div>
        <button className="bg-success btn text-white">Update</button>
      </form>
    </div>
  </div>
  )
}

export default UpdateUser