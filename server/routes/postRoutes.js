const express = require('express');
const { getPosts, getPost, createPost, updatePost, deletePost } = require('../controllers/postController');
const { validatePost } = require('../middlewares/validate');
const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', validatePost, createPost);
router.put('/:id', validatePost, updatePost);
router.delete('/:id', deletePost);

module.exports = router;
