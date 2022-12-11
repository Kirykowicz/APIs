const mongoose = require('mongoose');

const jobsSchema = new mongoose.Schema({
  order: Number,
  title: String,
  dates: String,
  duties: [String],
  company: String,
});

module.exports = mongoose.model('Job', jobsSchema);
