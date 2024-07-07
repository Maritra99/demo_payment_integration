import React,{useState} from 'react'

export default function Vanish() {
    const [state,setState]=useState(false)
  return (
    <div>
       {
           state? <p>Hello World</p>:null
       }
        <button className="btn btn-success"onClick={()=>setState(true)}>Show</button>
        <button onClick={()=>setState(false)}>Vanish</button><br/><br/>
        <button onClick={()=>setState(!state)}>Toggle</button>
    </div>
  )
}
