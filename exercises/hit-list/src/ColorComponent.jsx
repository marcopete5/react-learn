import React, {Component} from 'react';
import axios from 'axios';

class ColorComponent extends Component{
  constructor(){
    super();
    this.state = {
      color: ''
    }
  }
  componentWillMount = () => {
    axios.get('http://www.colr.org/json/color/random').then(response=>{
      this.setState({color: response.data.colors[0].hex});
    })
  }
  render(){
    return <div style={{backgroundColor: '#' + this.state.color, height: '200px'}}></div>
  }
}

export default ColorComponent;
