const Router = require('express')
const router = new Router();

const userController = require('../controllers/userController')


router.post('/', userController.newUser)
router.get('/:id', userController.getUserData)
router.put('/', userController.updateUserData)
router.delete('/:id', userController.removeUser)


module.exports = router;