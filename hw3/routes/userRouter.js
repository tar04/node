const {Router} = require('express');
const userController = require('../controllers/userController')

const userRouter = Router();

userRouter.get('/', userController.renderUsers);

userRouter.get('/:id', userController.getUserById);

userRouter.get('/delete/:id', userController.deleteUserById);

module.exports = userRouter;