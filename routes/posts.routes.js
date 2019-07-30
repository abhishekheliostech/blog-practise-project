const express = require('express')
const router = express.Router();

const post_controller = require('../controllers/posts.controller');

router.post('/create', post_controller.savePosts);
router.get('/', post_controller.getPosts);
router.put('/:id/update', post_controller.updatePosts);
router.delete('/:id/delete', post_controller.deletePosts);
module.exports = router;