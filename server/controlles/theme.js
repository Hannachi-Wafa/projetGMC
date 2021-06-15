const theme = require('../models/themeSchema')
const Products = require('../models/productSchema')


exports.gettheme= async(req, res) =>{
        try {
            const Theme = await theme.find().populate("category_id")

            res.json(Theme)
        } catch (err) {
            return res.status(500).json({error: err.message})
        }
    }
exports.createtheme= async (req, res) =>{
        try {
            // if user have role = 1 ---> admin
            // only admin can create , delete and update category
            const {title,images,category_id} = req.body;
            if (!images) return res.status(400).json({ error: "No image upload" })

            const newtheme = new theme({title,images,category_id})

            await newtheme.save()
            res.json({error: "Created a theme"})
        } catch (err) {
            return res.status(500).json({error: err.message})
        }
    }
    exports.deletetheme = async (req, res) => {
        try {
            await theme.findByIdAndDelete(req.params.id)
            res.json({ error: "Deleted a Product" })
        } catch (err) {
            return res.status(500).json({ error: err.message })
        }
    }
    exports.updatetheme= async(req, res) =>{
        try {
            const {title,images,category_id} = req.body;
            await theme.findOneAndUpdate({_id: req.params.id}, {title,images,category_id})

            res.json({error: "Updated a theme"})
        } catch (err) {
            return res.status(500).json({error: err.message})
        }
    }
