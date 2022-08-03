var coupon = require("./schema");
var user = require("./userSchema");
module.exports = function (req, res) {
  //console.log(req.body)
  coupon.couponModel.find({ couponCode: req.body.couponCode }).count((val) => {
    console.log(val);
    res.send({ msg: "some" });
  });
  // coupon.couponModel
  //   .findOne({}, { _id: 0, couponid: 1 }, { sort: { created_at: -1 } })
  //   .limit(1)
  //   .exec(function (err, id) {
  //     if (err) {
  //       res.send({ msg: "Something went wrong" });
  //     } else {
  //       console.log("coupon id", id);
  //       var newCoupon = new coupon.couponModel(req.body);
  //       newCoupon.save(function (err, data) {
  //         if (err) {
  //           res.send({ msg: "Something went wrong" });
  //         } else {
  //           res.send({
  //             msg:
  //               "Coupon added successfully!!! once it is verified you will get a notification mail"
  //           });
  //           user.userModel.updateOne(
  //             { mailid: req.body.mailid },
  //             { mailid: req.body.mailid, $inc: { count: 1 } },
  //             { upsert: true },
  //             function (err, data) {
  //               if (err) {
  //                 console.log(
  //                   err,
  //                   data,
  //                   " while adding count",
  //                   req.body.mailid
  //                 );
  //               }
  //               console.log(err, data, "Count incremented successfully");
  //             }
  //           );
  //         }
  //       });
  //     }
  //   });
};
