import React from 'react'
import {useState} from 'react'

export default function State() {
    const [data,setData]=useState("Aritra")

    function update(){
        setData("Mukherjee")
        alert(data)
        
    }
    
  return (
    <div>
        <p>hello {data}</p>
        <button onClick={()=>update()}>Update</button>
    </div>
  )
}
