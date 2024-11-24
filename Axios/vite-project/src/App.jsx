import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [data,setData]=useState([])

useEffect(()=>{
  axios.get('https://whoa.onrender.com/whoas/random')
  .then((e)=>{
    setData(e.data)
    console.log(e);
  }).catch((e)=>{
    console.log("Error found:"+e);
  })
},[])
console.log(data,'data');

  return (
    <>
      {data.map((e,i)=>{
         return(
          <>
          <h1>{e.movie}</h1>
          <img src={e.poster} alt="" />
          </>
         )
      })}
    </>
  )
}

export default App
