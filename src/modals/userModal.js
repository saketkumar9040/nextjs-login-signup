import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isVerified:{
    type:Boolean,
    default:false
  },
  isAdmin:{
    type:Boolean,
    default:false
  },
  forgotPasswordToken:String,
  forgotPasswordExpiry:Date,
  verifyToken:String,
  verifyTokenExpiry:Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
