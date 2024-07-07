import React from 'react'
//import { useState } from 'react'

export default function StateInFunction() {
    const [data,setData]= React.useState(100)
    const [value,setvalue]=React.useState(0)

    // function Updatevalue(e){
    //   setvalue(e.target.value)
    // }
    function addData(){
        setData(Number(data)+Number(value))
    }

    function subtractData(){
        setData(data-value)
    }
  return (
    <div>
        <h1>{data}</h1>
        <label>Enter the Value</label>
        <input type="number" onChange={(e)=>setvalue(e.target.value)}></input><br/><br/>
        <button onClick={addData}>Add</button>
        <button onClick={subtractData}>Subtract</button>
    </div>
  )
}
