const jwt=require('jsonwebtoken')



exports.userAuth=async(req,res,next)=>{
    const token=req.header('auth-token')
    try {
    if(!token) res.status(401).json({message:'you are not autorized'}) 
    const verifyToken= await jwt.verify(token,process.env.sercetkey);
    if(!verifyToken) res.status(401).json({message:'wrong token'}); 
    req.userId=verifyToken.id
    next()  
    } catch (error) {
    res.status(500).json({message:`something went wrong:${error}`}) 

    }
}