const product = require('../models/productModel');

const createProduct = async (req,res) => {
    try {
        const prod = await product.create({ 
            name: req.body.name,
            price:req.body.price,
            userId: req.user._id,
            category:req.body.category
        });
        res.status(200).send(prod);
    } catch(err) {
        res.status(400).send(err.message);
    }
}

const getAllProducts = async (req,res) => {
    try { 
        let data = await product.find().populate('category');
        res.status(200).send(data);
    } catch (err) {
        console.log(err);
    }
}

const getProductsByCategory = async (req,res) => {
    try {
        let data = await product.find({category:req.params.id});
        data.forEach(obj => console.log(obj.name));
        res.status(200).send(data);
    } catch (err) {
        res.status(400).send(err);
    }
    
}

const updateProduct = async (req,res) => {
    try {
        await product.findByIdAndUpdate({_id:req.params.id},{name:req.body.name});
        res.status(200).send('Product Updated!');
    } catch (err) {
        res.status(400).send(err);
    }
    
}

const deleteProduct = async (req,res) => {
    let {id} = req.params;
    try {
        await product.findByIdAndDelete({_id:id});
        res.status(200).send(`Product get Deleted!` );
    } catch(err) {
        res.status(400).send(err);
    }
}

const getFavoris = async (req,res) => {
    try {
        let favorite = await product.find().where({favoris:true});
        res.status(200).send(favorite);
    } catch (err) {
        res.status(400).send(err);
    }
}

module.exports = {createProduct,getProductsByCategory,updateProduct,deleteProduct,getAllProducts,getFavoris}