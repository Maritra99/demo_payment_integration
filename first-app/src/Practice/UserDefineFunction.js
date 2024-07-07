import React, { Component } from 'react'

export default class userDefineFunction extends Component {
    constructor() {
        super();
        this.state = {
            value:0,
            data:''
        }
    }
update=(e)=>{
    this.setState({data: e.target.value})
    //console.log(e.target.value)
}

updateState=()=>{
    this.setState({value:Number(this.state.value)+Number(this.state.data)})
}

    render() {
        return (
            <div>
                <h1>{this.state.value}</h1>
                <label>Enter The Value</label>
                <input type="number" onChange={() =>this.update()}></input>
                <button onClick={()=>this.updateState()}>Submit</button>
            </div>
        )
    }
}
