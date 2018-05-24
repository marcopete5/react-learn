import React, {Component} from 'react';
import './index.css';

class Header extends Component{
    render (){
        const {brand, slogan} = this.props;
        return (        
        <div className='header'>
            <h1>{brand}</h1>
            <h2>{slogan}</h2>
        </div>
    )
    }

}

export default Header;