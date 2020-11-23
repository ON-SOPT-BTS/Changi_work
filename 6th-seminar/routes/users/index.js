const express = require('express');
const router = express.Router();
const userController = require('../../controller/userController');
const authUtils = require('../../middlewares/authUtils');

router.post('/signup', userController.signup);
router.post('/signin', userController.signin);
router.get('/', authUtils.checkToken, userController.getAllUser);
router.get('/profile', authUtils.checkToken, userController.getProfile);
router.get('/:id', userController.getOneUser);
router.delete('/delete/:id', userController.delete);
router.put('/update/:id', userController.update);

module.exports = router;