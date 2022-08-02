var couponModel=require('./schema').couponModel
module.exports=function(req,res){
    couponModel.find({}).select({
        _id:0,name:1,desc:1,tNdc:1,validTill:1,company:1
    }).then(function(err,data){
        if(err){
            console.log(err)
        }else{
            send(data)
        }
    })
//res.send("all coupons")
}