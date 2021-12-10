const PostRepository = require('../repositories/postRepository');
const DUMMY_API_SETTINGS = require("../../api/dummyApi/constants");
const { statuses } = require('../../config/serverConfig');
const PostModel = require('../../models/PostModel');

class PostService {
  getPostsList(req, res) {
    PostRepository.getPostsList(
      req.query[DUMMY_API_SETTINGS.query.page],
      req.query[DUMMY_API_SETTINGS.query.limit])
      .then((response) => res.status(statuses.OK).json({
        data: PostModel.parseData(response.data)
      }));
  }

  getPostById(req, res) {
    PostRepository.getPostById(req.params.id)
      .then((response) => res.status(statuses.OK).json({
        data: PostModel.parseDatum(response.data)
      }));
  }

  getPostCommentsList(req, res) {
    PostRepository.getPostCommentsList(
      req.params.id,
      req.query[DUMMY_API_SETTINGS.query.page],
      req.query[DUMMY_API_SETTINGS.query.limit])
      .then((response) => res.status(statuses.OK).json({
        data: response.data
      }));
  }
}

module.exports = new PostService();
