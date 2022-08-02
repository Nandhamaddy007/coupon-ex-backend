const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var crypto = require("crypto");
const app = express();
var loc=require('./Objects')
var couponModel=require('./schema').couponModel
var getCoupons=require('./getCoupons');
const getCouponDetails = require("./getCouponDetails");
const addCoupons = require("./addCoupons");
const sendCoupon = require("./sendCoupon");

mongoose.connect(
    loc.loc,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (error) {
        console.log("Connected successfully!!")
      if (error) {
        console.log("Error! " + error);
      }
    }
  );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.get("/", (req, res) => {
console.log(couponModel)
    res.send("Hello world");
  });
app.get("/getcoupons",getCoupons);
app.get("/getcoupondetails/:couponId",getCouponDetails); 
app.post('/addcoupon',addCoupons)
app.post('/sendcoupon',sendCoupon)

  var port = process.env.port || 3001;
app.listen(port, () =>
  console.log("API is running on http://localhost:" + port + "...")
);