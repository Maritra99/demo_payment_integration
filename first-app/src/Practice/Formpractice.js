import React, { useState } from 'react'

export default function () {

    const[name,setName]=useState(null)
    const[pw,setpw]=useState(null)

    function fetchname(e){
        setName(e.target.value)
        console.log(e.target.value)
        
    }

    function fetchpw(e){
      setpw(e.target.value)
      console.log(e.target.value)
  }
    
  return (
     
    <div>
        <label>enter the username</label>
        <input type="text" onChange={(e) => fetchname(e)} ></input>
        <label>enter the pw</label>
        <input type="password" onChange={(e) => fetchpw(e)} ></input>
    </div>
  )
}
