const productRouter = require ('express').Router();
const productControllers = require('../controllers/productControllers');
const auth = require('../Middleware/requireAuth');


productRouter.use(auth);

productRouter.post('/create',productControllers.createProduct);
productRouter.get('/',productControllers.getAllProducts);
productRouter.get('/favoris',productControllers.getFavoris);
productRouter.get('/:id',productControllers.getProductsByCategory);
productRouter.put('/update/:id',productControllers.updateProduct);
productRouter.delete('/delete/:id',productControllers.deleteProduct);

// Note : put id routes below regular routes to avoid (error : Cast to ObjectId failed for value ...)

module.exports = productRouter