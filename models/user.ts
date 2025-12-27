import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    clerkId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    firstName: {
      type: String,
      trim: true,
    },

    lastName: {
      type: String,
      trim: true,
    },

    imageUrl: {
      type: String,
    },
  },
  {
    timestamps: true, // auto creates createdAt & updatedAt
  }
);

// Prevent model overwrite in development
export default mongoose.models.User || mongoose.model("User", UserSchema);
