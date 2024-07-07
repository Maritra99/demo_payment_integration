import React, { Component } from 'react'

export default class StateInClass extends Component {
    constructor(){
        super();
        this.state={
            data:0
        }
    }
    
    add(){
        this.setState({data: this.state.data+1})
    }

    subtract(){
        this.setState({data: this.state.data-1})
    }
  render() {
    return (
      <div>
          <h1>{this.state.data}</h1>
          <button onClick={()=>this.add()}>Add</button>
          <button onClick={()=>this.subtract()}>Subtract</button>
      </div>
    )
  }
}
