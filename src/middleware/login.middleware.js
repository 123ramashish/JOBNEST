export const authvalidation=(req,res,next)=>{
    if(req.session.authEmail){
next()
    }else{
        res.render('error-page',{message:'First login to access this page!'})
    }
}