import express from 'express';
const Router = express.Router();
import {
  getProductById,
  getProducts,
} from '../controlers/productController.js';

Router.route('/').get(getProducts);

Router.route('/:id').get(getProductById);

export default Router;
