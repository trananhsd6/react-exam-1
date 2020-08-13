import React, { Component } from 'react'

export default class Result extends Component {
    
    render() {
        return (
            <div>
                <div className="card border-light">
        <div className="card-header">Kết quả: Textsize: {this.props.TextSize}px - Color: {this.props.Color}</div>
                    <div className="card-body">
                        <p className="card-text" style={{'color':this.props.Color,'fontSize':this.props.TextSize}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        )
    }
}
