import React, { Component } from 'react';
import HitList from './HitList';
import MyNav from './MyNav';
import ColorComponent from './ColorComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <MyNav />
        <HitList />
        <ColorComponent />
      </div>
    );
  }
}

export default App;
