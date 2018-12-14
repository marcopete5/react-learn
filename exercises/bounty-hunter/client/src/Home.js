import React, { Component } from 'react';
import Form from './Form'
import BountyHandler from './BountyHandler'
import BountyDisplay from './BountyDisplay'
import {withBounty} from './BountyProvider'

class Home extends Component {

  componentDidMount(){
    this.props.getBounties()
  }

  render() {
    return (
      <div>
        <Form 
          reset
          inputs={{firstName: '', lastName: '', isJedi: 'Jedi', living: true, bountyAmount: '', image: ''}}
          submit={inputs => this.props.submitBounties(inputs)}
          render={props => <BountyHandler bountyClass='bountyForm' {...props} />}
        />
        <BountyDisplay bounties={this.props.bounties} />
      </div>
    );
  }
}

export default withBounty(Home);