const mongoose = require("mongoose");
const MintSchema = new mongoose.Schema({
  mintDelta: {
    type: Number,
    // required: true,
  },
  brandName: {
    type: String,
    // required: true,
  },
  brandIcon: {
    type: String,
  },
  twitter: {
    type: String,
  },
  discord: {
    type: String,
  },
  mintTitle: {
    type: String,
  },
  mintDesc: {
    type: String,
  },
  mintImage: {
    type: String,
  },
  mintUnit: {
    type: String,
  },
  mintMax: {
    type: Number,
  },
  mintCost: {
    type: Number,
  },
  mintSupply: {
    type: Number,
  },
});

module.exports = mongoose.model("mint", MintSchema);
