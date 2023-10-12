import mongoose from "mongoose";

const PointScore = new mongoose.Schema({
    name:{
      type: String,
      require: true,
    },
    score:{
      type: Number,
      require: true,
    },
});

const Score = mongoose.model("Score",PointScore);
export default Score;