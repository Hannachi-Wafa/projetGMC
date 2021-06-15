const { body, validationResult } = require('express-validator');


const validateUser=[
body('password').isLength({ min: 5 }),
body('fullname').isAlpha(),
body('email').isEmail(),  
]
module.exports=validateUser