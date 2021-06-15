const mongoose = require('mongoose')


const themeSchema = new mongoose.Schema({
   
    title:{
        type: String,
        trim: true,
        required: true
    },
    images:{
        type: Object,
        required: true
    },
    category_id:{
        type:mongoose.Types.ObjectId,
        ref:'Category'
    },
 
})


module.exports = mongoose.model("theme", themeSchema)