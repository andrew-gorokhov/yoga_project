const Router = require('express');

const router = new Router();
const postRouter = require('./postRouter')
const userRouter = require('./userRouter')
const subRouter = require('./subRouter')
router.use('/post', postRouter)
router.use('/user', userRouter)
router.use('/sub', userRouter)
module.exports = router;