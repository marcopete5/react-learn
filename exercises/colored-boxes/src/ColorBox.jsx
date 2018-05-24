import React, {Component} from 'react';

class ColorBox extends Component {


  render(){
    const {title, subtitle, backgroundColor, information} = this.props;
    const styles = {
      box: {
        margin: '1%',
        boxSizing: 'border-box',
        backgroundColor,
        width: '18%',
        display: 'inline-block',
        border: '2px solid black',
        height: '200px',
        textAlign: 'center',
        padding: '0px 50px'
      }
    }
    return (
      <div style={styles.box}>
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
        <p>{information}</p>
      </div>
    );
  }
}

export default ColorBox;
