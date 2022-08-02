var couponModel = require("./schema").couponModel;
module.exports = function (req, res) {
  couponModel
    .find({})
    .select({
      _id: 0,
      name: 1,
      desc: 1,
      tNdc: 1,
      validTill: 1,
      company: 1
    })
    .then(function (data, err) {
      if (err) {
        console.log(err);
      } else {
        res.send(data);
      }
    });
  //res.send("all coupons")
};
