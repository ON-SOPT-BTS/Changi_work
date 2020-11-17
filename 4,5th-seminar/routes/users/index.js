const express = require('express');
const router = express.Router();
const userController = require('../../controller/userController');

router.post('/signup', userController.signup);
router.post('/signin', userController.signin);
router.get('/', userController.getAllUser);
router.get('/:id', userController.getOneUser);
router.delete('/delete/:id', userController.delete);
router.put('/update/:id',userController.update);

module.exports = router;