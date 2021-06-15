const express= require('express')
const {createtheme,deletetheme,updatetheme,gettheme} = require('../controlles/theme')
const {userAuth} = require('../middleware/userAuth')
const {AdminAuth}= require('../middleware/AdminAuth')
const router= express.Router();

router.get('/theme',gettheme)
router.post('/newtheme', userAuth,AdminAuth,createtheme)

router.delete('/theme/:id',userAuth, AdminAuth, deletetheme)
router.put('/theme/:id', userAuth, AdminAuth,updatetheme)



module.exports = router