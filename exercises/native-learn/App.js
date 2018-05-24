import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Greetings from './Greetings'
import Blinker from './Blinker'

export default class App extends React.Component {

  render() {
    let pic = {
      uri: "https://upload.wikimedia.org/wikipedia/en/thumb/3/34/Kong_Skull_Island_creature_design.jpg/150px-Kong_Skull_Island_creature_design.jpg"
    }
    return (
      <View style={styles.container}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
          <View style={{flex: 2, backgroundColor: 'skyblue'}} />
          <View style={{flex: 3, backgroundColor: 'steelblue'}} >
            <Image style={styles.imageAdjust} source={pic}/>
          </ View>

        <Greetings />
        <Blinker />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageAdjust: {
    display: 'flex',
    justifyContent: 'center',
    height:150,
    width: '28%',
    borderRadius: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  }
});
