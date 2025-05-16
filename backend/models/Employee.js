// models/Employee.js
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true
  },
  position: {
    type: String,
    required: [true, 'Please add a position'],
    trim: true
  },
  department: {
    type: String,
    required: [true, 'Please add a department'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    trim: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ]
  },
  phone: {
    type: String,
    trim: true
  },
  salary: {
    type: Number,
    required: [true, 'Please add a salary']
  },
  joinDate: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Employee', employeeSchema);