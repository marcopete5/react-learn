const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(express.json())
app.use('/api/bounties', require('./bountyRoutes'))

mongoose.connect('mongodb://localhost:27017/bountyHunter',{useNewUrlParser: true})
.then(()=> console.log("Connected to MongoDB"))
.catch(err => console.error(err));


app.listen(5000, () => {
    console.log('Listening on port ' + 5000)
})