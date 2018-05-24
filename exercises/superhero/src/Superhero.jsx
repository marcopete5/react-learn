import React from 'react';


function Superhero(props){
    let {name, img, phrase, add} = props;
        return(
            <div onClick={add}>
                <h1>{name}</h1>
                <img src={img} />
            </div>
        );  
}

export default Superhero;