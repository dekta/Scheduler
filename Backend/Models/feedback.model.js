const mongoose = require('mongoose');

const feedbackSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  message: {
    type: String,
    required: true
  }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = {Feedback};
