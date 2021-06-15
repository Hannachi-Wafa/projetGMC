const commande = require('../models/commandeSchema')

exports.getcommande=async(req,res)=>{
    try {
        const commandes= await commande.find().populate('ligneC_id').populate('user_id')
        res.status(200).json(commandes)
        } catch (error) {
        res.status(500).json({error:`something went wrong:${error}`}) 
        
        }   
}


exports.createcommande = async (req, res) => {
    try {
        const {user_id,ligneC_id,isValidate} = req.body;
       
        const newcommande = new lignecommande({
            total:0 ,user_id,ligneC_id,isValidate})
        const commandes=await newcommande.save();

        res.status(200).json({commandes})
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}
exports.deletecommande = async (req, res) => {
    try {
        await commande.findByIdAndDelete(req.params.id)
        res.json({ error: "Deleted commande" })
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}
exports.updatecommande = async (req, res) => {
    try {
        const {total ,user_id,ligneC_id,isValidate} = req.body;

        await commande.findOneAndUpdate({ _id: req.params.id },  { total ,user_id,ligneC_id,isValidate})

        res.json({ error: "Updated commande" })
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}
