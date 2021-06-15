const Products = require('../models/reservationSchema')

exports.getreservation=async(req,res)=>{
    try {
        const Reservation= await reservation.find().populate('theme_id user_id')
        res.status(200).json(Reservation)
        } catch (error) {
        res.status(500).json({message:`something went wrong:${error}`}) 
        
        }   
}


exports.createreservation = async (req, res) => {
    try {
        const {dateReservation,prix_theme,user_id,theme_id} = req.body;       
        const newreservation = new reservation({
            dateReservation,prix_theme,user_id,theme_id})
        const reservations=await newreservation.save();

        res.status(200).json({reservations})
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}
exports.deletereservation = async (req, res) => {
    try {
        await reservation.findByIdAndDelete(req.params.id)
        res.json({ error: "Deleted a reservation" })
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}
exports.updatereservation = async (req, res) => {
    try {
        const {dateReservation,prix_theme,user_id,theme_id} = req.body;

        await reservation.findOneAndUpdate({ _id: req.params.id },  {dateReservation,prix_theme,user_id,theme_id})

        res.json({ error: "Updated a reservation" })
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}
