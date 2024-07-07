import React from 'react'

export default function () {
    let data="Aritra"

    function update(){
        data="Mukherjee"
        alert(data)
        
    }
  return (
    <div>
        <p>hello {data}</p>
        <button onClick={()=>update()}>Update</button>
    </div>
  )
}
