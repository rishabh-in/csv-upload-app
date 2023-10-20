import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("Mongo DB connected". yellow.bold)
  } catch (error) {
    console.log(error.red.bold)
  }
}

export default connectDb