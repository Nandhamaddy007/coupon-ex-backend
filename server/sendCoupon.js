const { couponModel } = require("./schema");
var user = require("./userSchema").userModel;

module.exports = function (req, res) {
  //res.send("send couopns");
  console.log(req);
  couponModel
    .find(
      { mailid: req.body.mailid, status: "active" },
      { _id: 0, couponid: 1, mailid: 1 }
    )
    .then(function (data, err) {
      if (err) {
        console.log(err);
        res.status(404).json({
          msg: "Sorry you dont have enough active coupons contributed"
        });
      } else {
        if (data.length > 1) {
          couponModel.find(
            { couponid: req.body.couponid },
            { _id: 0, couponCode: 1, status: 1 },
            (coupon, errcoupon) => {
              if (errcoupon) {
                res.status(500).json({
                  msg: "sorry somethng went wrong please try again later..."
                });
              } else {
                if (coupon.status === "active") {
                  //send it to requester and reduce 1
                } else {
                  res.status(404).json({
                    msg: "Sorry the coupon no longer exist..."
                  });
                }
              }
            }
          );
        } else {
          res.status(400).json({
            msg:
              "requested coupon cannot be processed due to insufficient account balance"
          });
        }
        res.send({ msg: "data received successfully", data: data });
      }
    });
};
