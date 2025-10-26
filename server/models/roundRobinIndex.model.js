import mongoose from "mongoose";

const roundRobinSchema = new mongoose.Schema({
  currentIndex: { type: Number },
});

const roundIndexModel = mongoose.model("RoundIndex", roundRobinSchema);

export default roundIndexModel;
