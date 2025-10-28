import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/claimCoupon.route.js";

const app = express();
dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api", router);

app.listen(PORT, () => console.log("Server is running on port: ", PORT));
