import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Users() {
    const [users,setUsers]=useState([])
    
    useEffect(()=>{
        axios.get('http://localhost:3001/')
        .then((result)=>{
            setUsers(result.data)
        } )
        .catch((e)=>console.log("Error occured"+e))
    },[])
    console.log(users,"users");


    const handleDelete=(id)=>{
        axios.delete('http://localhost:3001/deleteUser/'+id)
        .then((res)=>{
            console.log(res);
            window.location.reload()
        }).catch((er)=>console.log(er))
        

    }
  return (
      <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50  p-3 rounded-5 bg-white'>
        <Link className='btn bg-success text-white' to='/create' >Create user</Link>
            <table className='table'>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,index)=>{
                        return(

                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>
                                   <Link 
                                   className='btn bg-warning text-black m-1' 
                                   to={`/update/${user._id}`}>Edit📝</Link>
                                    <button className='btn btn-danger'
                                     onClick={(e)=>{handleDelete(user._id)}}>Delete</button>
                                </td>
                            </tr>
                            )
                    })}
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Users