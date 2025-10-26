import express from "express";
import { createCoupon } from "../controller/createCoupon.controller.js";
import { claimCoupon } from "../controller/claimCoupon.controller.js";
import { userAuth } from "../userAuth/user.auth.js";

const router = express.Router();

router.post("/create-coupon", createCoupon);
router.get("/getCoupon", userAuth, claimCoupon);

export default router;
