import React,{useState} from 'react'

export default function PropsExample(Stuname) {

  const[name,setState]=useState(Stuname.name)
  return (
    <div>
      <h1>Hello {name}</h1>
      <button onClick={()=>setState("Adrita")}>Change Name</button>
      <h1>Email: {Stuname.email}</h1>
    </div>
  )
}




//Put This Under Index.js
// <PropsExample name={"Aritra"} email={"abc@gmail.com"}/>