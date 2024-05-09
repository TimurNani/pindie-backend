const mongoose = require('mongoose');
const categoryModel = require('./category');

const userModel = require('./user');

const gameSchema = new mongoose.Schema({
  title: {
      // Поле со строковым значением
    type: String,
    // Явно указываем, что поле обязательно при записи в базу нового документа
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  developer: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  categories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'categoryModel',
  }],
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'userModel',
  }],
});

module.exports = mongoose.model('game', gameSchema);
