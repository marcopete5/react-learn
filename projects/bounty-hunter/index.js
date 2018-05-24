const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const cors = require('cors');

const bountyRoute = require('./routes/bounty.js');
const data = require('./database.js');

const app = express();
const config = require('./config');


//middleware
app.use(bodyParser.json());
app.use(cors());

app.use('/bounty', bountyRoute);
//HTTP requests
// app.get('/', (req, res) => {
// console.log(req.query);
//   if (Object.keys(req.query).length === 0){
//     res.send(data);
//   }else {
//     const livingQuery = [];
//     for(let i = 0; i < data.length; i++){
//       if (req.query.isLiving === data[i].isLiving.toString()){
//         livingQuery.push(data[i]);
//       }else{
//         console.log('Invalid Query type')
//       }
//   }
//   res.send(livingQuery);
// }
// })
//
// app.get('/:_id', (req, res) => {
//   for(let i = 0; i < data.length; i++){
//     let myId = data[i]._id.toString();
//     if(myId === req.params._id){
//       res.send(data[i])
//     }else{
//       res.send("Could not find bounty")
//     }
//   }
// })
//
// app.post('/', (req, res) => {
//   const newBounty = req.body;
//   newBounty._id = uuid.v4();
//   data.push(newBounty)
//   res.send({
//     msg: "success",
//     dataAdded: newBounty,
//     data
//   })
// })
//
// app.put('/:_id', (req, res) => {
//   const updatedBounty = req.body;
//   for(let i = 0;i < data.length; i++){
//     let myId = data[i]._id.toString();
//     if (myId === req.params._id){
//       data[i] = Object.assign(data[i], updatedBounty);
//       res.send({
//         msg: "successfully updated bounty"
//       })
//     }else {
//       res.send({
//         msg: `could not find bounty with id of ${req.params._id}`
//       })
//     }
//   }
// })
//
// app.delete('/:_id', (req, res) => {
//   for(let i = 0; i < data.length; i++){
//     let myId = data[i]._id.toString();
//     if(myId === req.params._id){
//       data.splice(data[i], 1);
//       res.send('successfully deleted item');
//     }else {
//       res.send(`Could not locate id ${req.params._id}`)
//     }
//   }
// })

app.listen(config.port, (req, res) => {
  console.log(`Server is running on port ${config.port}`);
})
