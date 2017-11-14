import React, { Component } from 'react';
import Vacation from './Vacation';
import Navbar from './MyNav';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.vacationSpots = [
        {
          place: "Meridian, Idaho",
          price: "$40",
          timeToGo: "Spring"
        },{
          place: "Cancun",
          price: "$900",
          timeToGo: "Winter"
        },{
          place: "China",
          price: "$1200",
          timeToGo: "Fall"
        },{
          place: "Russia",
          price: "$1100",
          timeToGo: "Summer"
        },{
          place: "Lebanon",
          price: "$400",
          timeToGo: "Spring"
        }
      ];
  }
  render(){
    const panels = this.vacationSpots.map(spot => {
      const hollowPrice = spot.price.split('');
      hollowPrice.shift();
      let price = parseInt(hollowPrice.join(''));
      if (price < 500){
        price = spot.price;
      }else if (price > 500 && price < 1000){
        price = '$' + spot.price;
      }else{
        price = '$$' + spot.price;
      }
      switch (spot.timeToGo){
        case 'Spring':
            return <Vacation
              place={spot.place}
              price={price}
              timeToGo={spot.timeToGo}
              backgroundColor = 'green'/>;
            break;
        case 'Winter':
           return  <Vacation
              place={spot.place}
              price={price}
              timeToGo={spot.timeToGo}
              backgroundColor = 'blue'/>;
            break;
        case 'Summer':
          return <Vacation
              place={spot.place}
              price={price}
              timeToGo={spot.timeToGo}
              backgroundColor = 'yellow'/>;
            break;
        case 'Fall':
           return <Vacation
              place={spot.place}
              price={price}
              timeToGo={spot.timeToGo}
              backgroundColor = 'orange'/>;
            break;
      }
          });

    return(
      <div>
        <Navbar />
        {panels}
      </div>
    );
  }
}

export default App;
