import userModel from "../models/user.models.js";

export const userAuth = async (req, res, next) => {
  const cookieId = req.cookies.claimed || null;
  console.log("CookieId: ", cookieId);

  const userIp = req.ip;
  console.log("userIp: ", userIp);

  const timeRemain = new Date(Date.now() - 60 * 1000);
  console.log("Time remain: ", timeRemain);

  const ipExist = await userModel.findOne({
    ip: userIp,
    timestamp: { $gt: timeRemain },
  });
  console.log("Ip Exist: ", ipExist);

  if (ipExist) {
    return res.json({ message: "You can claim Again after 1 minute" });
  }

  if (cookieId) {
    const claimedCookieId = await userModel.findOne({
      cookieId,
      timestamp: { $gt: timeRemain },
    });
    if (claimedCookieId) {
      return res.json({
        message: "You have already claimed coupon in this session",
      });
    }
  }
  next();
};
