import React from 'react';
import {withBounty} from './BountyProvider'
import Form from './Form';
import BountyHandler from './BountyHandler';
import Toggle from './Toggler';


const Bounty = (props) => {
    let {firstName, lastName, isJedi, living, bountyAmount, _id} = props.bounty
    return (
        <Toggle on render={({on, toggle}) => 
            <div>
            {on ? 
                <div className='bounty' id={isJedi === 'Jedi' ? 'jedi' : 'sith'} onClick={() => props.getBounty(_id)}>
                    <h3>{firstName} {lastName}</h3>
                    <h4 >{isJedi === 'Jedi' ? 'Jedi' : 'Sith'}</h4>
                    <h4>{living ? 'Alive' : 'Dead'}</h4>
                    <h4>{bountyAmount}</h4>
                    <button onClick={() => props.deleteBounties(_id)}>Delete</button>
                    <button onClick={toggle}>Edit</button>
                </div>
                :
                <Form 
                    reset
                    inputs={{firstName, lastName, isJedi, living, bountyAmount}}
                    submit={inputs => {
                        props.editBounties(inputs, _id)
                        toggle()
                        }}
                    render={props => <BountyHandler bountyClass='bountyDiv' {...props}/>}
                />
            }
            </div>
        }/>
    );
};

export default withBounty(Bounty);