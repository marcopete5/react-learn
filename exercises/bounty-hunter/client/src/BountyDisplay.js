import React from 'react';
import {Link} from 'react-router-dom';


const BountyDisplay = (props) => {
    const bountyList = props.bounties.map(bounty => <Link to={`/bounty/${bounty._id}`} className='bountyLink'>
        <h3>{bounty.firstName} {bounty.lastName}</h3>
    </Link>)
    return (
        <div className="allBounties">
            {bountyList}
        </div>
    );
};

export default BountyDisplay;