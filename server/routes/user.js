const express=require('express');
const { register, login,getUser } = require('../controlles/user');
const validateUser = require('../controlles/validateUser');
const router= express.Router();

router.post('/newuser',validateUser,register)
router.post('/login',login)
router.get('/',getUser)


module.exports=router;