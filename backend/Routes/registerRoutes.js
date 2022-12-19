const registerRouter = require('express').Router();
const registerController = require('../Controllers/registerControllers');

registerRouter.post('/signup',registerController.signupController);
registerRouter.post('/login',registerController.loginController);


module.exports = registerRouter;