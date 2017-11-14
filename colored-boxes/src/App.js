import React, {Component} from 'react';
import ColorBox from './ColorBox';

class App extends Component {
  constructor(){
    super();
    this.boxes = [
      {
        title: "Animal",
        subtitle: 'A New Kind',
        information: "It's a very rare sort",
        backgroundColor: "beige"
      },
      {
        title: "Cat",
        subtitle: 'A New Kind',
        information: "It's a very rare sort",
        backgroundColor: "lobster"
      },
      {
        title: "Dog",
        subtitle: 'A New Kind',
        information: "It's a very rare sort",
        backgroundColor: "green"
      },
      {
        title: "Mewtwo",
        subtitle: 'A New Kind',
        information: "It's a very rare sort",
        backgroundColor: "red"
      },
      {
        title: "Poo",
        subtitle: 'A New Kind',
        information: "It's a very rare sort",
        backgroundColor: "purple"
      },
      {
        title: "Penguin",
        subtitle: 'A New Kind',
        information: "It's a very rare sort",
        backgroundColor: "orange"
      },
      {
        title: "Giraffe",
        subtitle: 'A New Kind',
        information: "It's a very rare sort",
        backgroundColor: "yellow"
      },
      {
        title: "Butterfly",
        subtitle: 'A New Kind',
        information: "It's a very rare sort",
        backgroundColor: "white"
      },
      {
        title: "Housefly",
        subtitle: 'A New Kind',
        information: "It's a very rare sort",
        backgroundColor: "blue"
      },
      {
        title: "Grasshopper",
        subtitle: 'A New Kind',
        information: "It's a very rare sort",
        backgroundColor: "brown"
      }
    ]
  }
  render(){

    const boxesJSX = this.boxes.map(box => {
      return <ColorBox
        title={box.title}
        subtitle={box.subtitle}
        information={box.information}
        backgroundColor={box.backgroundColor}
        />
    })
    return(
      <div>
        {boxesJSX}
      </div>
    );
  }
}

export default App;
