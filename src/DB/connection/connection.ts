import mongoose from "mongoose";
mongoose.set('strictQuery', true)

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URI!)
//         console.log(`📡... Database Gallery vision successfully connected!`)
//     } catch (error) {
//         console.log(error)
//         process.exit(1);
//     }
// }
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://arjun:HVUlAqvmeEAbOSTk@cluster0.deb5y4o.mongodb.net/GalleryVision", {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log(`📡... Database successfully connected!`);
    } catch (error) {
        console.error(`Error connecting to database`);
        process.exit(1);
    }
}

export default connectDB;

