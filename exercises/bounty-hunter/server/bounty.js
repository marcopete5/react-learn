const mongoose = require('mongoose')
const Schema = mongoose.Schema


const bountySchema = new Schema ({
    firstName: String,
    lastName: String,
    isJedi: String,
    living: Boolean,
    bountyAmount: Number,
    image: String
})

module.exports = mongoose.model("Bounty", bountySchema)