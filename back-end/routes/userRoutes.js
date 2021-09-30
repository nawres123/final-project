import express from 'express';
const Router = express.Router();
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  deleteUser,
  getUsers,
  getUserById,
  updateUser
} from '../controlers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

Router.route('/').post(registerUser);
Router.post('/login', authUser);
Router.route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

Router.route('/:id')
 .delete(protect , admin , deleteUser)
 .get(protect ,admin , getUserById) 
 .put(protect , admin , updateUser)

 Router.get("/", admin, getUsers);

export default Router;
