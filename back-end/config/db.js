import dotenv from "dotenv";
import mongoose from 'mongoose';

dotenv.config();
<<<<<<< HEAD


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URI, {
=======
const DB_URI = 'mongodb+srv://Nawres:1234@cluster0.fhdtv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(DB_URI, {
>>>>>>> e52e43e7ca8221254cbb77f1d229f946ba2ee912
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
