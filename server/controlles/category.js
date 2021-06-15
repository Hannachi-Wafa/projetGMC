const Category = require('../models/categorySchema')
const Products = require('../models/productSchema')


exports.getCategories= async(req, res) =>{
        try {
            const categories = await Category.find()
            res.json(categories)
        } catch (err) {
            return res.status(500).json({error: err.message})
        }
    }
exports.createCategory= async (req, res) =>{
        try {
            // if user have role = 1 ---> admin
            // only admin can create , delete and update category
            const {name} = req.body;
            const category = await Category.findOne({name})
            if(category) return res.status(400).json({error: "This category already exists."})

            const newCategory = new Category({name})

            await newCategory.save()
            res.json({error: "Created a category"})
        } catch (err) {
            return res.status(500).json({error: err.message})
        }
    }
    exports.deleteCategory= async(req, res) =>{
        try {
            const products = await Products.findOne({category: req.params.id})
            if(products) return res.status(400).json({
                error: "Please delete all products with a relationship."
            })

            await Category.findByIdAndDelete(req.params.id)
            res.json({error: "Deleted a Category"})
        } catch (err) {
            return res.status(500).json({error: err.message})
        }
    }
    exports.updateCategory= async(req, res) =>{
        try {
            const {name} = req.body;
            await Category.findOneAndUpdate({_id: req.params.id}, {name})

            res.json({error: "Updated a category"})
        } catch (err) {
            return res.status(500).json({error: err.message})
        }
    }
