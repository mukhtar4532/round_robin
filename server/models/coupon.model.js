import mongoose from "mongoose";

const couponSchema = new mongoose.Schema({
  code: { type: String, required: true },
});

const couponModel = mongoose.model("Coupon", couponSchema);

export default couponModel;
