import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './ColorPicker.css'

class ColorPicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colors: ['red','green','blue','#ccc']
        }
    }
    
    
   
    render() {
        var elements = this.state.colors.map((value,index)=>{
                return <span key={index} style ={{'backgroundColor':value}} className={this.props.Color === value ? 'active':''} onClick={()=>this.props.onReceiveColor(value)}></span>
        });
        return (
            <div className="card border-primary mb-3">
                <div className="card-header">Color Picker</div>
                <div className="card-body text-primary">
                {elements}
                </div>
            </div>
        );
    }
}

export default ColorPicker;