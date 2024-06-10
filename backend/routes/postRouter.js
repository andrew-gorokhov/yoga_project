const Router = require('express')
const router = new Router();

const postController = require('../controllers/postController')


router.post('/', postController.addPost)
router.get('/', postController.getPosts)
router.get('/tag/:tag', postController.getTagPosts)
router.put('/', postController.updatePost)
router.delete('/:id', postController.removePost)


module.exports = router;
