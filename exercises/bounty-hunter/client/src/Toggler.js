import { Component } from 'react';

class Toggler extends Component {
    constructor(props){
        super(props)

        this.state = {
            on: props.on || false
        }
    }

    toggle = () => {
        this.setState(({on}) => ({on: !on}))
    }

    render() {
        const props = {
            toggle: this.toggle,
            ...this.state
        }
        return this.props.render(props)
    }
}

export default Toggler;
