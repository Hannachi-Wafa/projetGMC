const mongoose = require("mongoose");
const schema = mongoose.Schema;

const reservationSchema = new schema({
  dateReservation: { type: Date, required: true, default: Date.now },
  prix_theme:{
    type: Number,
    required: true    
  },
  theme_id: 
    {
      type: mongoose.Types.ObjectId,
      ref: "theme",
    },
    user_id: 
    {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
  
});

module.exports = mongoose.model("reservation", reservationSchema);