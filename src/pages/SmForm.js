import React, { useState } from 'react'

export default function SmForm() {
const [inpdata,setInpdata] = useState({})

  return (
    <>
        <input type='text' onChange={(e)=>setInpdata({
          ...inpdata , name:e.target.value
        })} placeholder='name'/><br />
        <input type='text' onChange={(e)=>setInpdata({
          ...inpdata , body:e.target.value
        })}  placeholder='body'/><br />
        <input type='text' onChange={(e)=>setInpdata({
          ...inpdata , email:e.target.value
        })} placeholder='email'/><br />
        <input type='text' placeholder='id'/><br />
        <button>Update</button>



    
      
    </>
  )
}
