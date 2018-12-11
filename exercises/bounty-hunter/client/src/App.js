import React, { Component } from 'react';

//Components
import Home from './Home'

//Router 
import {Switch, Route, withRouter} from 'react-router-dom';

//Context
import {withBounty} from './BountyProvider'

//CSS
import './App.css'
import Bounty from './Bounty';

class App extends Component {
  render() {
    return (
      <Switch>
          <Route exact path='/bounty' component={Home} />
          <Route path='/bounty/:id' render={props => {
            const myBounty = this.props.bounties.find(bounty => bounty._id === props.match.params.id)
            return <Bounty bounty={myBounty} />
          }} />
      </Switch>
    );
  }
}

export default withRouter(withBounty(App));
