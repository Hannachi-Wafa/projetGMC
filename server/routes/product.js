const express= require('express')
const {createProduct,deleteProduct,updateProduct,getProduct} = require('../controlles/product')
const {userAuth} = require('../middleware/userAuth')
const {AdminAuth}= require('../middleware/AdminAuth')
const router= express.Router();

router.get('/products',getProduct)
router.post('/newproducts', userAuth,AdminAuth,createProduct)

router.delete('/products/:id',userAuth, AdminAuth, deleteProduct)
router.put('/products/:id', userAuth, AdminAuth,updateProduct)



module.exports = router