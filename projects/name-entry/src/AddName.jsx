import React, {Component} from 'react';

const names = ['cat', 'man', 'person'];
let currentWord = '';
class AddName extends Component{
  constructor(){
    super();

    this.state = {
      inVal: '',
      currentWord,
      names
    }

  }
  getValue = event => {
    this.setState({inVal: event.target.value});
  }


  addValue = event => {
    names.push(this.state.inVal);
    this.setState({currentWord: this.state.names[this.state.names.length-1] })
    this.setState({names, inVal: ''})
  }
  
  deleteValue = (index) => {
    names.splice(index, 1);
    this.setState({names})
  }
  render(){
    return (
      <div>
        <h1>{this.state.currentWord}</h1>
        <input type='text' onChange={this.getValue} value={this.state.inVal}></input>
        <button onClick={this.addValue}>Submit</button>
        <ol>
          {this.state.names.map((name, i) => <div><li>{name}</li><button onClick={() => this.deleteValue(i)}>X</button></div>)}
        </ol>
      </div>
    );
  }
}

export default AddName;
