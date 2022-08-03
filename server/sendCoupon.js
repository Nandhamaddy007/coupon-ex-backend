const { couponModel } = require("./schema");

module.exports = function (req, res) {
  //res.send("send couopns");
  console.log(req);
  couponModel
    .find({ mailid: req.body.mailid }, { _id: 0 })
    .then(function (data, err) {
      if (err) {
        console.log(err);
      } else {
        if (data.length > 1) {
        }
        res.send({ msg: "data received successfully", data: data });
      }
    });
};
