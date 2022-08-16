const mongoose = require("mongoose");
var couponSchema = new mongoose.Schema({
  name: String,
  couponCode: { type: String, unique: true, required: true, dropDups: true },
  desc: String,
  tNdc: String,
  validTill: Date,
  company: String,
  whereGot: String,
  status: String,
  mailid: String,
  couponid: String,
  category: String
});
module.exports.couponModel = mongoose.model("coupons", couponSchema);
