const {Router} = require('express');
const signinController = require('../controllers/signinController');
const isUserExist = require('../middleware/isUserExist');

const signInRouter = Router();

signInRouter.get('/', signinController.renderSignIn);

signInRouter.post('/', isUserExist,signinController.signUserIn)

module.exports = signInRouter;