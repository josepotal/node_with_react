const mongoose = require('mongoose');

const { Schema } = mongoose;

// sub document collection
const recipientSchema = new Schema({
  email: String,
  reponded: { type: Boolean, default: false }
});

module.exports = recipientSchema;
