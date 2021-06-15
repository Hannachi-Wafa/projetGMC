const user= require('../models/userSchema')

exports.AdminAuth = async (req, res, next) =>{
    try {
        // Get user information by id
        const User = await user.findOne({
            _id: req.userId
        })
        if(User.role === 0)
            return res.status(400).json({msg: "Admin resources access denied"})

        next()
        
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

