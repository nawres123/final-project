
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import orderRoutes from './routes/orderRoutes.js';

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);

//app.get('/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID));

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(
    `Server is up and running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
