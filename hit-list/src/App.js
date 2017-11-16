import React, { Component } from 'react';
import HitList from './HitList';
import MyNav from './MyNav';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <MyNav />
        <HitList />
      </div>
    );
  }
}

export default App;
