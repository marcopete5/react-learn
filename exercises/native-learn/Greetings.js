import React from 'react'
import { Text, View } from 'react-native'
import Greeting from './Greeting'

class Greetings extends React.Component {
  render () {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    )
  }
}

export default Greetings;
