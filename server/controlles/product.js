const Products = require('../models/productSchema')

exports.getProduct=async(req,res)=>{
    try {
        const products= await Products.find().populate('category_id')
        res.status(200).json(products)
        } catch (error) {
        res.status(500).json({error:`something went wrong:${error}`}) 
        
        }   
}


exports.createProduct = async (req, res) => {
    try {
        const {title, price, description, images, qteStock, category_id,etat} = req.body;
        if (!images) return res.status(400).json({ error: "No image upload" })
    
        const newProduct = new Products({
        title: title.toLowerCase(), price, description, images, qteStock, category_id,etat})
        const productt=await newProduct.save();

        res.status(200).json({productt})
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}
exports.deleteProduct = async (req, res) => {
    try {
        await Products.findByIdAndDelete(req.params.id)
        res.json({ error: "Deleted a Product" })
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}
exports.updateProduct = async (req, res) => {
    try {
        const { title, price, description, images, qteStock, category_id,etat } = req.body;
        if (!images) return res.status(400).json({ error: "No image upload" })

        await Products.findOneAndUpdate({ _id: req.params.id },  { title: title.toLowerCase(), price, description, images, qteStock, category_id,etat })

        res.json({ error: "Updated a Product" })
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}
