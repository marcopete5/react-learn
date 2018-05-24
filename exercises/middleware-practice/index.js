//Third party packages
const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid');

//Local files
const data = require('./database.js');
const logger = require('./logger.js');
const sizer = require('./sizer.js');

//other variables
const app = express();
let port = 8080;

//middleware
app.use(bodyParser.json())
app.use(logger);
app.use(sizer(data));

//HTTP Requests
app.get('/', (req, res) => {
  res.send({
    data,
    size: res.size
  })
})

app.post('/', (req, res) => {
  let newData = req.body;
  newData._id = uuid();
  data.push(newData);
  res.send({
    msg: "success",
    dataAdded: req.body,
    data
  })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
