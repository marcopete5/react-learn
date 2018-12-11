import React from 'react';

const BountyHandler = ({handleChange, handleSubmit, inputs, bountyClass}) => {
    return (
        <form onSubmit={handleSubmit} className={bountyClass}>
            <input type="text" placeholder='First Name' name='firstName' value={inputs.firstName} onChange={handleChange} />
            <input type="text" placeholder='Last Name' name='lastName' value={inputs.lastName} onChange={handleChange} />
            <div>
                <input type="radio" name='isJedi' value='Jedi' onChange={handleChange} checked={inputs.isJedi === 'Jedi'} />
                <span>Jedi</span>
            </div>
            <div>
                <input type="radio" name='isJedi' value='Sith' onChange={handleChange} checked={inputs.isJedi === 'Sith'} />
                <span>Sith</span>
            </div>
            <div id='living'>
                <input type="checkbox" name='living' onChange={handleChange} checked={inputs.living}/> 
                <span>Living?</span>   
            </div> 
            <input type="number" placeholder='Bounty Amount' name='bountyAmount' value={inputs.bountyAmount} onChange={handleChange} />
            <button>Submit</button>
        </form>
    );
};

export default BountyHandler;