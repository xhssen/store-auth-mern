const category = require("../models/categoryModel");

const createCategory = async (req,res) => {
    try {
        // let newCategory = new category({
        //     name: req.body.name
        // })
        // let data = await newCategory.save(); or
        let data = await category.create({name:req.body.name});
        res.status(200).json({
            added: true,
            postCategory: data
        })
    } catch (err) {
        console.log(err);
    }

}

const showAllCategories = async (req,res) => {
    try {
        let categoryData = await category.find();
        res.status(200).json({
          show: true,
          getCategory: categoryData 
        })
    } 
    catch (err) {
        res.status(400).json({
            show:false,
            getCategory: err
        })
    }
}

const showOneCategory = async (req,res) => {
    try {
        // ** if document not found find method return empty array , others return null else they all return the document **
        // let oneCategory = await category.find({_id:req.params.id});
        // let oneCategory = await category.findOne({_id:req.params.id}); 
        let oneCategory = await category.findById(req.params.id);
        res.status(200).send(oneCategory);
    } catch (err) {
        res.status(400).send(err);
    }
}

const updateCategory = async (req,res) => {
    try {
        // ** update() depreacated, replaced by updateOne(), updateMany() **
        // ** findOneAndUpdate returns the document that will be updated whereas updateOne does not **
        // await category.findOneAndUpdate({_id:req.params.id},{name:"Women"});
        // await category.updateOne({_id:req.params.id},{name:"Women"});
        await category.findByIdAndUpdate(req.params.id,{name:req.body});
        res.status(200).send("Category Updated!");
    } catch (err) {
        res.status(400).send(err);
    }
}

const deleteCategory = async (req,res) => {
    try {
        await category.deleteOne({_id:req.params.id});
        res.status(200).send("Category Deleted!");
    } catch (err) {
        res.status(400).send(err);
    }
}

module.exports= {createCategory,showAllCategories,showOneCategory,updateCategory,deleteCategory}