const express= require('express')
const {createligneC,deleteligneC,updateligneC,getligneC} = require('../controlles/lignecommande')
const {userAuth} = require('../middleware/userAuth')
const {AdminAuth}= require('../middleware/AdminAuth')
const router= express.Router();

router.get('/ligneC',getligneC)
router.post('/newligneC', userAuth,AdminAuth,createligneC)

router.delete('/ligneC/:id',userAuth, AdminAuth, deleteligneC)
router.put('/ligneC/:id', userAuth, AdminAuth,updateligneC)



module.exports = router