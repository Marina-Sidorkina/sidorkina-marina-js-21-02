const router = require('express').Router();
const PostService = require('../services/postService');

router
  .get('', PostService.getPostsList)
  .get('/:id', PostService.getPostById);

module.exports = router;