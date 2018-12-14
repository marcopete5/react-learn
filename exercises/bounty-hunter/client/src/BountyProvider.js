import React, { Component } from 'react';
import axios from 'axios'
const {Consumer, Provider} = React.createContext();



class BountyProvider extends Component {
    constructor(){
        super()

        this.state = {
            bounties: [],
            bounty: '',
            on: true
        }
    }

    getBounties = () => {
        axios.get('/api/bounties').then(response => {
            this.setState({bounties: response.data})
        })
    }

    deleteBounties = id => {
        axios.delete(`/api/bounties/${id}`).then(response => {
            this.setState(({bounties}) => ({bounties: bounties.filter(bounty => id !== bounty._id)}))
        })
    }

    editBounties = (updatedBounty, id) => {
        axios.put(`/api/bounties/${id}`, updatedBounty).then(response => {
            this.setState(({bounties}) => ({bounties: bounties.map(bounty => id === bounty._id ? response.data.bounty : bounty)}))
        })
    }

    submitBounties = (newBounty) => {
        axios.post('/api/bounties', newBounty).then(response => {
            console.log(`successfully posted ${newBounty}`)
            this.setState(({bounties}) => ({bounties: [...bounties, newBounty]}))
        })
    }

    toggle = () => {
        this.setState(({on}) => ({on: !on}))
    }
    render() {
        return (
            <Provider value={{
                getBounties: this.getBounties,
                submitBounties: this.submitBounties,
                deleteBounties: this.deleteBounties,
                editBounties: this.editBounties,
                toggle: this.toggle,
                ...this.state
            }}>
                {this.props.children}
            </Provider>
        );
    }
}

export default BountyProvider;

export const withBounty = C => props => (
    <Consumer>
        {value => <C {...value}{...props} /> }
    </Consumer>
)