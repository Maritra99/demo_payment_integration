import React, { Component } from 'react'

export default class PropsInClass extends Component {
    render() {
        return (
            <div>
                <h1>Students {this.props.name}</h1>
                <h1>Email: {this.props.email}</h1>
                <h1>{this.props.children}</h1>
                {/* <h1>Hi I Am InnerHTML</h1> */}
            </div>

        )
    }
}
