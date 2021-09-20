import express from 'express';
const Router = express.Router();
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
} from '../controlers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

Router.route('/').post(registerUser);
Router.post('/login', authUser);
Router.route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default Router;
