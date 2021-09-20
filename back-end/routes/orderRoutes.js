import express from 'express';
const Router = express.Router();
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
} from '../controlers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

Router.route('/').post(protect, addOrderItems);
Router.route('/:id').get(protect, getOrderById);
Router.route('/:id/pay').put(protect, updateOrderToPaid);

export default Router;
