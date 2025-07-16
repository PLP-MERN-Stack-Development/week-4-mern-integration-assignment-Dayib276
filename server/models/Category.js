const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxlength: 50,
  },
});

module.exports = mongoose.model('Category', CategorySchema);
