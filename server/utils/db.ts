import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/mydatabase"; // Use your DB URL

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            // Optional: Uncomment below for stricter handling
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log("✅ MongoDB Connected Successfully");
    } catch (error) {
        console.error("❌ MongoDB Connection Failed:", error);
        process.exit(1); // Exit if DB connection fails
    }
};
