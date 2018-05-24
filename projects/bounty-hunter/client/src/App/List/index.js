import React from 'react';
import {connect} from "react-redux";


const List = (props) => {
  let {fname, lname, isLiving, amount, isJedi, bounties} = props;
    return bounties.map((bounty, i) => {
      if (bounty.isLiving === "true"){
        return (<div>
          <h1>Name: {bounty.fname} {bounty.lname}</h1>
          <h2>Status: Living</h2>
          <h2>Reward: {bounty.amount}</h2>
          <h2>Type: {bounty.isJedi}</h2>
        </div>)
      }else {
        return (<div>
          <h1>Name: {bounty.fname} {bounty.lname}</h1>
          <h2>Status: Dead</h2>
          <h2>Reward: {bounty.amount}</h2>
          <h2>Type: {bounty.isJedi}</h2>
        </div>)
      }
    })


}

export default connect(state => state, {})(List);
