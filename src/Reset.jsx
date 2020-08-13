import React, { Component } from 'react'

export default class Reset extends Component {
    render() {
        return (
                 <button type="button" className="btn btn-warning" onClick={()=>this.props.Reset(true)}>Reset</button>
        )
    }
}
