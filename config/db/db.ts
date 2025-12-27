import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  await mongoose.connect(process.env.MONGO_BD_URL as string);
  console.log("MongoDB Connected");
};

export default connectDB;
