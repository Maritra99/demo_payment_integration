import React, { Component, createElement } from 'react'

export default class ClassComponents extends Component {
  render() {
  
    //With JSX
    return (
      <div>Hello From user</div>    
    )


    //Without JSX
    return React.createElement('div',null,"This Is Without Jsx")
  


    //Without JSX Childern Component
    return React.createElement('h1',null,createElement('h1',null,"This is InnerHTML")) 
}
}
