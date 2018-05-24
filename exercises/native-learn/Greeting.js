import React from 'react'
import { Text } from 'react-native'

class Greetings extends React.Component {
  render () {
    return (
      <Text>Hello {this.props.name}</Text>
    )
  }
}

export default Greetings;
