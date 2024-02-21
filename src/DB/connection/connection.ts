import mongoose from "mongoose";
mongoose.set('strictQuery', true)

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI!)
        console.log(`📡... Database Gallery vision successfully connected!`)
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}

export default connectDB;