import mongoose from 'mongoose';

//cluster uri
const CLUSTER_URI = "mongodb+srv://Nawres:1234@cluster0.fhdtv.mongodb.net/greenlife?retryWrites=true&w=majority"

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(CLUSTER_URI, {
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
