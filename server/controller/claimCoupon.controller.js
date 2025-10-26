import couponModel from "../models/coupon.model.js";
import roundIndexModel from "../models/roundRobinIndex.model.js";
import userModel from "../models/user.models.js";

export const claimCoupon = async (req, res) => {
  try {
    const coupons = await couponModel.find();

    if (coupons.length === 0) {
      return res.json({ message: "Coupons are not available." });
    }

    let roundIndex = await roundIndexModel.findOne();
    console.log("Current Round index value: ", roundIndex.currentIndex);

    const currentIndex = roundIndex.currentIndex ?? 0;

    const assignedCoupon = coupons[currentIndex];
    roundIndex.currentIndex = (currentIndex + 1) % coupons.length;

    await roundIndex.save();

    console.log("Updated Round index value: ", roundIndex.currentIndex);

    const newClaimCoupon = new userModel({
      ip: req.ip,
      cookieId: req.cookies.claimed || Math.random().toString(36).substring(2),
      coupon: assignedCoupon.code,
    });
    await newClaimCoupon.save();

    res.cookie("claimed", newClaimCoupon.cookieId, {
      maxAge: 60 * 1000,
      httpOnly: true,
    });

    return res.json({
      message: "Coupon claimed successfully.",
      coupon: assignedCoupon.code,
      currentIndex: roundIndex.currentIndex,
    });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Error occur in claiming coupon." });
  }
};
