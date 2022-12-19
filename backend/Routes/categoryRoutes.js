const categoryRouter = require('express').Router();
const categorieController = require("../controllers/categoryControllers")

categoryRouter.post('/create',categorieController.createCategory);
categoryRouter.get('/',categorieController.showAllCategories);
categoryRouter.get('/:id',categorieController.showOneCategory);
categoryRouter.put('/update/:id',categorieController.updateCategory);
categoryRouter.delete('/delete/:id',categorieController.deleteCategory);

module.exports = categoryRouter
