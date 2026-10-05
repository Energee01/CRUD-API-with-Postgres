const express = require ('express')
const postController = require ('../controllers/postController')

const router = express.Router();

router.post('/add-new-post', postController.addPost);
router.get('/get-all-posts', postController.getAllPost);
router.get('/:id', postController.getPostbyId);
router.put('/:id', postController.updatePost);
router.delete('/:id',postController.deletePost )


module.exports = router;