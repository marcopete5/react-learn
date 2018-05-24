const express = require('express');
const bountyRoute = express.Router();
const data = require('../database');
const bodyParser = require('body-parser');
const uuid = require('uuid');

bountyRoute.route('/')

  .get((req, res) => {

    if (Object.keys(req.query).length === 0){
      res.send(data);
    }else {
      const livingQuery = [];
      for(let i = 0; i < data.length; i++){
        if (req.query.isLiving === data[i].isLiving.toString()){
          livingQuery.push(data[i]);
        }else{
          console.log('Invalid Query type')
        }
    }
    res.send(livingQuery);
    }
  })

  .post((req, res) => {

  const newBounty = req.body;
  newBounty._id = uuid.v4();
  data.push(newBounty)
  res.send({
    msg: "success",
    dataAdded: newBounty,
    data
  })
});

bountyRoute.route('/:_id')

  .get((req, res) => {
  for(let i = 0; i < data.length; i++){
    if(data[i]._id === req.params._id){
      return res.send(data[i])
    }
  }
  res.send("Could not find bounty")
  })

  .put((req, res) => {
    
  const updatedBounty = req.body;
  for(let i = 0;i < data.length; i++){
    let myId = data[i]._id.toString();
    if (myId === req.params._id){
      data[i] = Object.assign(data[i], updatedBounty);
      return res.send({
        msg: "successfully updated bounty"
      })
    }
  }
  res.send({
    msg: `could not find bounty with id of ${req.params._id}`
  })
})

  .delete((req, res) => {
  for(let i = 0; i < data.length; i++){
    let myId = data[i]._id.toString();
    if(myId === req.params._id){
      data.splice(data[i], 1);
      return res.send('successfully deleted item');
    }
  }
  res.send(`Could not locate id ${req.params._id}`)
})

module.exports = bountyRoute;
