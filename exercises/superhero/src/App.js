import React, { Component } from 'react';
import Superhero from './Superhero';
import supers from './super.json';

class App extends Component {
    constructor(){
        super();
        
        this.superList = supers.heros;
        
    }
    
    addPhrase = (id) =>{
        alert(this.superList[id].catchphrase);
    }
    
    render() {
        
        const heroes = this.superList.map((hero, i) => {
            return <Superhero 
                    add={() => this.addPhrase(hero.id)}
                    phrase={hero.catchphrase}
                    key={i+hero.name} 
                    name={hero.name} 
                    img={hero.img} 
                    />
        })
        
        
    return (
      <div>
        {heroes}
      </div>
    );
  }
}

export default App;
