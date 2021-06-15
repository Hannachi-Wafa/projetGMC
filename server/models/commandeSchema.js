const mongoose = require('mongoose')


const commandeSchema = new mongoose.Schema({
   
   total:{
        type:Number,
        required: true
    },
    user_id:{
        type:mongoose.Types.ObjectId,
        ref:'user'
    },
    ligneC_id:{
        type:mongoose.Types.ObjectId,
        ref:'lignecommande'
    },
    isValidate: { type: Boolean,default:false},

})


module.exports = mongoose.model("commande", commandeSchema)