import React, {Component} from 'react';


class Vacation extends Component {
  render(){
    const {place, price, timeToGo, backgroundColor} = this.props;
    const styles = {
      box:{
        backgroundColor
      }
    }
    return(
      <div className='vacationPanel' style={styles.box}>
        <h1>{place}</h1>
        <h2>{price}</h2>
        <h2>{timeToGo}</h2>
      </div>
    );
  }
}

export default Vacation;
