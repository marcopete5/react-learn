const express = require('express');
const bodyParser = require('body-parser');
const database = require('./database.js');
const uuid = require('uuid');

const greet = express.Router();
const app = express();
let port = 8080;

//middleware
app.use(bodyParser.json());
app.use('/greet', greet)

//routes
app.get('/', (req, res) => {
  res.send(database)
});

app.get('/:id', (req, res) => {
  let {id} = req.params;
  found = false;
  let foundEntry;
  for (let i = 0; i < database.length; i++){
    if (database[i]._id === id){
      found = true;
      foundEntry = database[i];
      break;
    }
  }
  if (found){
    res.send({
      msg: `Item ${id} was found!`,
      data: foundEntry
    })
  }else {
    res.send("Not found");
  }

})

app.post('/', (req, res) => {
  let newEntry = req.body;
  newEntry._id = uuid();
  database.push(newEntry)
  res.send({
    msg: "data added successfully",
    dataAdded: req.body,
    database
  });
})

app.put('/:id', (req, res) => {
  let { id } = req.params;
  let updatedEntry = req.body;
  let found = false;
  for (let i = 0; i < database.length; i++){
    if (database[i]._id === id) {
      database[i] = Object.assign(database[i], updatedEntry);
      found = true;
      break;
    }
  }
  if (found){
    res.send({
      msg: "data updated"
    })
  }else {
    res.send({
      msg: "not found, didn't update"
    })
  }

})

app.delete('/:id', (req, res) => {
  let { id } = req.params;
  let found = false;
  for (let i = 0; i < database.length; i++){
    if (database[i]._id === id) {
      database.splice(i, 1);
      found = true;
      break;
    }
  }
  if (found){
    res.send("successfully deleted item")
  } else  {
    res.send("could not find item")
  }

})



app.listen(port, () => {
  console.log("Listening on port " + port);
})
