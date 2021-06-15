const express= require('express')
const {createcommande,deletecommande,updatecommande,getcommande} = require('../controlles/commande')
const {userAuth} = require('../middleware/userAuth')
const {AdminAuth}= require('../middleware/AdminAuth')
const router= express.Router();

router.get('/commande',getcommande)
router.post('/newcommande', userAuth,AdminAuth,createcommande)

router.delete('/commande/:id',userAuth, AdminAuth, deletecommande)
router.put('/commande/:id', userAuth, AdminAuth,updatecommande)



module.exports = router