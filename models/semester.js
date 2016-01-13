var ClassInstance = require('./classinstance.js');
var mongoose = require('mongoose');
var async = require('async');

var semesterSchema = new mongoose.Schema({
  createdAt: {
    type: Number,
    default: Date.now
  },
  updatedAt: {
    type: Number,
    default: Date.now
  },
  trimesterLabel: String,
  year: Number,
  semesterContainer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SemesterContainer'
  },
  organization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Organization'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  classInstances: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Semester',
    default: []
  }]
});

module.exports = mongoose.model('Semester', semesterSchema);
