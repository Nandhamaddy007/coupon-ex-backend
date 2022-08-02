var coupon=require('./schema')
module.exports=function (req,res){
    //console.log(req.body)
    coupon.couponModel.findOne({},{_id:0,couponid:1},{ sort: { 'created_at' : -1 } }).limit(1).exec(
        function (err,id){
            if(err){
                res.send({msg:"Something went wrong"})
            }else{
                console.log(id)
            var newCoupon=new coupon.couponModel(req.body)
            newCoupon.save(function (err,data){
                if(err){
                    res.send({msg:"Something went wrong"})
                }else{
                    res.send({msg:"Coupon added successfully!!! once it is verified you will get a notification mail"})
                }
            
            })
        }
        })
    
    
}