// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { 
  register, 
  login, 
  getMe, 
  updateProfile,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} = require('../controllers/authController');
const { protect, checkRole } = require('../middleware/auth');

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes (require authentication)
router.get('/me', protect, getMe);
router.put('/me', protect, updateProfile);

// Admin routes
router.get('/users', protect, checkRole('admin'), getUsers);
router.route('/users/:id')
  .get(protect, checkRole('admin'), getUserById)
  .put(protect, checkRole('admin'), updateUser)
  .delete(protect, checkRole('admin'), deleteUser);

module.exports = router;