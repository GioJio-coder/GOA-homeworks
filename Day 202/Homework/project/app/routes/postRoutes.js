const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const auth = require('../middleware/auth');

router.get('/', postController.getAllPosts);
router.post('/', auth, postController.createPost);
router.delete('/:id', auth, postController.deletePost);
router.post('/:id/like', auth, postController.toggleLikePost);

module.exports = router;