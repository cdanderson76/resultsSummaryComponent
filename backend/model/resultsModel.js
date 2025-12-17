import mongoose from "mongoose";

const resultsSchema = new mongoose.Schema({

  category: {
    type: String,
    required: true,
  },

  score: {
    type: Number,
    required: true,
  },

  icon: {
    type: String,
    required: true,
  }
});

const Results = mongoose.model('Result', resultsSchema);

export default Results;