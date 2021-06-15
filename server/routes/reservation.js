const express= require('express')
const {createreservation,deletereservation,updatereservation,getreservation} = require('../controlles/reservation')
const {userAuth} = require('../middleware/userAuth')
const {AdminAuth}= require('../middleware/AdminAuth')
const router= express.Router();

router.get('/products',getProduct)
router.post('/newproducts', userAuth,createProduct)

router.delete('/products/:id',userAuth ,deleteProduct)
router.put('/products/:id', userAuth,updateProduct)



module.exports = router