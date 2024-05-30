import mongoose from "mongoose";

const connection = {}; // Use this object to track the connection state

 const connectToDB = async () => {
    try {
        if (connection.isConnected) {
            return; // If already connected, do nothing
        }
        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connections[0].readyState;
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw new Error(error);
    }
};
export default connectToDB