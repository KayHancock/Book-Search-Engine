const { Schema, model } = require("mongoose");

const bookSchema = require("./Book");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  savedBooks: [bookSchema],
});

module.exports = userSchema;
