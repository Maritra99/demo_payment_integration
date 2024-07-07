import React from 'react'
//import { useState } from 'react'

export default function StateInFunction() {
    const [data,setData]= React.useState(0)
    function addData(){
        setData(data+1)
    }

    function subtractData(){
        setData(data-1)
    }
  return (
    <div>
        <h1>{data}</h1>
        <button onClick={addData}>Add</button>
        <button onClick={subtractData}>Subtract</button>
    </div>
  )
}
