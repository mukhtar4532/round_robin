import couponModel from "../models/coupon.model.js";

export const createCoupon = async (req, res) => {
  try {
    const { couponCode } = req.body;

    if (!couponCode || !Array.isArray(couponCode)) {
      res.json({ message: "Please provide an array of coupons code." });
    }

    const coupons = couponCode.map((code) => ({ code }));
    console.log(coupons);
    await couponModel.insertMany(coupons);

    return res.json({
      message: "Coupons created successfully. ",
      total: coupons.length,
    });
  } catch (error) {
    console.log(error);
    res.json({ message: "Error while creating coupons !!!" });
  }
};
