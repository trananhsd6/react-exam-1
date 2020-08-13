import React, { Component } from 'react'

export default class TextSizeChange extends Component {

    changeSize = (value) =>{
        this.props.onChangeSize(value);
    }

    render() {
        return (
            <div>
                <div className="card border-success mb-3">
                    <div className="card-header">Change text size</div>
                    <div className="card-body text-success">
                        <h5 className="card-title">Text size: {this.props.TextSize}px</h5>
                        <button type="button" className="btn btn-danger mr-2" onClick={() => this.changeSize(-2)}> Giảm</button>
                        <button type="button" className="btn btn-primary" onClick={() => this.changeSize(2)}>Tăng</button>
                    </div>
                </div>
            </div>
        )
    }
}
