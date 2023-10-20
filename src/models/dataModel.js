import mongoose from "mongoose";

const userDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  }
});

const userDataModel = mongoose.model('data', userDataSchema);

export default userDataModel;