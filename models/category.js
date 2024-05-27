const mongoose = require('mongoose');

const categoryModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('categories', categoryModel);
