import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    birthday: { type: String, required: true },
    cep: { type: String, required: true },
    address: { type: String, required: true },
    number: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
  }
);

const users = mongoose.model('users', userSchema);

export default users;