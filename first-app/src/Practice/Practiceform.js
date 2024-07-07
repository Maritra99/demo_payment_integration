import React,{useState} from 'react'

export default function () {

    const[data,setData]=useState(null)

    function change(e){
        setData(e.target.value)
        console.log(e.target.value)
    }
  return (
    <div>
    <label>Enter Your Name</label>
    <input type='text' onChange={(e)=>change(e)}></input>
    </div>

  )
}
