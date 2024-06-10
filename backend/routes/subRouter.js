const Router = require('express')
const router = new Router();

const subController = require('../controllers/subController')


router.post('/', subController.addSubscryber)



module.exports = router;
