import React,{Component} from 'react';

class HitComponent extends Component{
  render(){
    return(
      <div className='victims'>
        <img src={this.props.image}></img>
        <h3>{this.props.name}</h3>
      </div>
    );
  }
}

export default HitComponent;
