// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ]
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    minlength: [6, 'Password must be at least 6 characters'],
    select: false
  },
  role: {
    type: String,
    enum: ['admin', 'manager', 'employee'],
    default: 'employee'
  },
  permissions: {
    employees: {
      view: { type: Boolean, default: false },
      create: { type: Boolean, default: false },
      update: { type: Boolean, default: false },
      delete: { type: Boolean, default: false }
    },
    assets: {
      view: { type: Boolean, default: false },
      create: { type: Boolean, default: false },
      update: { type: Boolean, default: false },
      delete: { type: Boolean, default: false }
    },
    expenses: {
      view: { type: Boolean, default: false },
      create: { type: Boolean, default: false },
      update: { type: Boolean, default: false },
      delete: { type: Boolean, default: false }
    },
    income: {
      view: { type: Boolean, default: false },
      create: { type: Boolean, default: false },
      update: { type: Boolean, default: false },
      delete: { type: Boolean, default: false }
    },
    analytics: {
      view: { type: Boolean, default: false }
    }
  },
  isActive: {
    type: Boolean,
    default: true
  },
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee'
  },
  lastLogin: {
    type: Date
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date
}, {
  timestamps: true
});

// Encrypt password using bcrypt
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Set default permissions based on role
userSchema.pre('save', function(next) {
  if (this.isModified('role') || this.isNew) {
    if (this.role === 'admin') {
      // Admin has all permissions
      this.permissions = {
        employees: { view: true, create: true, update: true, delete: true },
        assets: { view: true, create: true, update: true, delete: true },
        expenses: { view: true, create: true, update: true, delete: true },
        income: { view: true, create: true, update: true, delete: true },
        analytics: { view: true }
      };
    } else if (this.role === 'manager') {
      // Manager has view permissions for everything, create/update for most things
      this.permissions = {
        employees: { view: true, create: true, update: true, delete: false },
        assets: { view: true, create: true, update: true, delete: false },
        expenses: { view: true, create: true, update: true, delete: false },
        income: { view: true, create: true, update: true, delete: false },
        analytics: { view: true }
      };
    } else {
      // Regular employee has limited permissions
      this.permissions = {
        employees: { view: true, create: false, update: false, delete: false },
        assets: { view: true, create: false, update: false, delete: false },
        expenses: { view: true, create: true, update: false, delete: false },
        income: { view: true, create: false, update: false, delete: false },
        analytics: { view: false }
      };
    }
  }
  next();
});

// Match user entered password to hashed password in database
userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);