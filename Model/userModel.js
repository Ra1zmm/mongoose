const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  age: Number,
  favoriteFoods: Array,
});

const Person = mongoose.model("Person", userSchema);
module.exports = Person;
