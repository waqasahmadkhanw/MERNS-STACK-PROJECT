import mongoose from "mongoose"

const dbConnection=async()=>{
try {
    console.log("mogoseurl",process.env.MONGODB_URI)
    const db=await mongoose.connect(process.env.MONGODB_URI)
    console.log("MongoDb connected successfully",db.connection.host)
} catch (error) {
    console.log("MongoDB connection error",error)

}
}
export default dbConnection