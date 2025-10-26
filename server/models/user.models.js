import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  ip: String,
  cookieId: String,
  coupon: String,
  timestamp: { type: Date, default: Date.now },
});

const userModel = mongoose.model("User", userSchema);
export default userModel;
