const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/practice-doc');

const Schema = mongoose.Schema;

const petSchema = new Schema({
  name: String,
  furColor: String,
  weight: Number,
  toys: [String],
  isFriendly: Boolean
});

const Pet = mongoose.model('Pet', petSchema);

const myPets = new Pet({
  name: 'Skank',
  furColor: 'yellow',
  weight: 30,
  toys: ['squeaker', 'bone'],
  isFriendly: false
});
myPets.save((err, new_pet) => {
});
