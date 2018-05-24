import React from 'react';
import Form from './shared/Form';
import Recipes from './Recipes/Recipes';

function App(props){
    return (
        <div>
            <Form add clear/>
            <Recipes />
        </div>
    )
}

export default App;