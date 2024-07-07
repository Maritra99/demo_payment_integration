import React from 'react'

export default function ImportanceOfState() {

function change(){
    data="arnab"
    alert(data)
}
    let data="CS"
  return (
    <div>
        <h1>hello {data}</h1>
        <button onClick={()=>change()}>update</button>
    </div>
  )
}
