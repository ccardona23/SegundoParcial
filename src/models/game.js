const mongoose = require('mongoose');
const { Schema } = mongoose;

const GameSchema = new Schema({
  bola: Number,
});

module.exports = mongoose.model('Game', ChatSchema);
