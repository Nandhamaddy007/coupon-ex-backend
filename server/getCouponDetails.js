var couponModel = require("./schema").couponModel;
module.exports = function (req, res) {
  console.log(req.params);
  //   couponModel
  //     .find({couponid:req.data.id})
  //     .select({
  //       _id: 0,
  //       name: 1,
  //       desc: 1,
  //       tNdc: 1,
  //       validTill: 1,
  //       company: 1
  //     })
  //     .then(function (data, err) {
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         res.send(data);
  //       }
  //     });
  //res.send("all coupons")
};
