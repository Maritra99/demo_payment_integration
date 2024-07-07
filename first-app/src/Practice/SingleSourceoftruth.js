import React, { Component } from 'react'

export default class SingleSourceoftruth extends Component {
    constructor() {
        super();
        this.state = {
            textUserName: "Infosys",
            formErrors:{}
        }
        this.getName=(e)=>{
            this.setState({textUserName: e.target.value})
            console.log(e.target.value)
            
        }
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" name='Username' value={this.state.textUserName} onChange={this.getName}/>
                </form>
            </div>
        )
    }
}
