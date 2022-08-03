const mongoose = require("mongoose");
var couponSchema = new mongoose.Schema({
  mailid: String,
  count: Number
});
module.exports.userModel = mongoose.model("userdata", couponSchema);
