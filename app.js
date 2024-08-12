const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Person = require("./Model/userModel");

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const MongoURL = process.env.MongoURL;

mongoose.connect(MongoURL).then(console.log("Connected to db"));

const createPerson = (personData) => {
  const newPerson = new Person(personData);
  newPerson.save();
  console.log("the new Person is saved", newPerson);
};
// createPerson({
//   name: "XXXXXXX",
//   age: "99",
//   favoriteFoods: []
// });

const findOnePerson = async (name) => {
  const exPerson = await Person.findOne({ name: name });
  console.log("the new Person is Found", exPerson);
};
// findOnePerson()

const findPerson = async (name) => {
  const exPerson = await Person.find();
  return exPerson ? console.log(exPerson) : console.log("Person not found");
};
// findPerson()

const findByIdPerson = async (id) => {
  const userId = id;
  const exPerson = await Person.findById({ _id: userId });
  console.log("the new Person is Found", exPerson);
};
findByIdPerson('66ba3fc7784fae3e24e32275')

const deletePerson = async (name) => {
  const exPerson = await Person.findOneAndDelete({ name: name });
  console.log("the new Person is Deleted", exPerson);
};
// deletePerson()
