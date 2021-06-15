const express= require('express')
const {getCategories,createCategory,deleteCategory,updateCategory} = require('../controlles/category')
const {userAuth}= require('../middleware/userAuth')
const {AdminAuth} = require('../middleware/AdminAuth')
const router= express.Router();


router.get('/category',getCategories)
router.post('/newcategory' ,userAuth, AdminAuth, createCategory)

router.delete('/category/:id',userAuth, AdminAuth, deleteCategory)
router.put('/category/:id',userAuth, AdminAuth, updateCategory)


module.exports = router