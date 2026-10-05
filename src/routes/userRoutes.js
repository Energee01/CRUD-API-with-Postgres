const express = require ('express')
const userController = require ('../controllers/userController')

const router = express.Router();

router.post('/add-user', userController.addUser);
router.get('/existing-users', userController.getAllUsers);

router.delete('/:id', userController.deleteUser);

module.exports = router;