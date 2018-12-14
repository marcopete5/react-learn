import React from 'react';
import {Link} from 'react-router-dom';


const BountyDisplay = (props) => {
    const bountyList = props.bounties.map(bounty => {
        const styles = {
            width: '75%',
            backgroundImage: `url('${bounty.image}')`,
            height: '69%',
            margin: 'auto',
            marginTop: '-7px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: '3px 3px 6px #333'
        }
        return (
            <Link to={`/bounty/${bounty._id}`} className='bountyLink'>
                <h3 style={{marginTop: '-20px'}}>{bounty.firstName} {bounty.lastName}</h3>
                <div style={styles}></div>
                <h1>${bounty.bountyAmount}</h1>
            </Link>
        )
    })
    return (
        <div className="allBounties">
            {bountyList}
        </div>
    );
};

export default BountyDisplay;