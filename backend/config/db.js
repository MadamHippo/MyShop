import mongoose from "mongoose";
// talking to MongoDB
// you don't have to import mongoDB because it's in the .env file. You don't have to call it everywhere, you do it in one file which is the config/server.js file.

const connectDB = async () => {
  try{    
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
    console.log(`MongoDb connected: ${conn.connection.host}`)
  } catch(error){
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB
