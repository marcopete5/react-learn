import React,{Component} from 'react';
import axios from 'axios';
import HitComponent from './HitComponent';

class HitList extends Component {
  constructor(){
    super();
    this.state = {
      list: []
    }
  }
  componentWillMount(){
    axios.get('http://api.vschool.io:6543/hitlist.json').then(response=>{
      this.setState({list: response.data})
    })
  }
  render(){
    const fullList = this.state.list.map(hit =>
        <HitComponent
          image={hit.image}
          name={hit.name}
        />
    )
    return fullList;
  }
}

export default HitList;
