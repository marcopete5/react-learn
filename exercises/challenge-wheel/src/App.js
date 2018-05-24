import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Wheel from './Wheel';
import Navbar from './Navbar';
import Challenges from './Challenges';
import {ReactSpinner} from 'react-spinning-wheel';
import 'react-spinning-wheel/dist/style.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



class App extends Component {
  constructor(){
    super();

    this.state = {
      loading: true,
    }
  }

  componentWillMount (){
    this.setState({loading:false});
  }
  render() {
    let {loading} = this.state;
    return (
      loading ?
      <div>
        <ReactSpinner />
      </div>
      :
      <MuiThemeProvider>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Wheel}></Route>
            <Route path='/create' component={Challenges}></Route>
          </Switch>
        </div>
      </ MuiThemeProvider>
    );
  }
}

export default App;
