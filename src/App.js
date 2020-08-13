import React, { Component } from 'react';
import './App.css';
import Result from './Result';
import TextSizeChange from './TextSizeChange';
import Reset from './Reset';
import ColorPicker from './ColorPicker';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      textSize: 12
    };
  }

  onSetColor = (color)=>{
      this.setState({
        color : color
      });
  }

  setTextSize = (size)=>{
      this.setState({
        textSize: (this.state.textSize + size) < 0 ? this.state.textSize : this.state.textSize +size
      })
  }

  onReset = (params) =>{
    if(params){
      this.setState({
        color: 'red',
        textSize: 12
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-md-6">
            <ColorPicker Color ={this.state.color}  onReceiveColor ={this.onSetColor}/>
          </div>
          <div className="col-md-6">
            <TextSizeChange TextSize={this.state.textSize} onChangeSize = {this.setTextSize}/>
          </div>
        </div>
        <Reset Reset={this.onReset} />
        <div className='col-md-12'>
          <Result Color={this.state.color} TextSize={this.state.textSize} />
        </div>
      </div>
    );
  }
}


export default App;
