const PostRepository = require('../repositories/postRepository');
const DUMMY_API_SETTINGS = require("../../api/dummyApi/constants");
const { statuses } = require('../../config/serverConfig');
const PostModel = require('../../models/postModel');
const CommentModel = require('../../models/commentModel');
const logger = require('../logger');
const format = require('string-format');
const { postService: messages } = require('../../constants/loggerMessages');

class PostService {
  getPostsList(req, res) {
    logger.info(format(messages.GET_POSTS_LIST_INVOKE,
      req.query[DUMMY_API_SETTINGS.query.page],
      req.query[DUMMY_API_SETTINGS.query.limit]));

    PostRepository.getPostsList(
      req.query[DUMMY_API_SETTINGS.query.page],
      req.query[DUMMY_API_SETTINGS.query.limit])
      .then((response) => {
        const data = PostModel.parseData(response);

        logger.info(format(messages.GET_POSTS_LIST_SUCCESS,
          statuses.OK,
          JSON.stringify(data)));

        res.status(statuses.OK).json({ data: data });
      })
      .catch((error) => {
        logger.info(format(messages.GET_POSTS_LIST_ERROR, statuses.UNKNOWN_ERROR, error));
        res.status(statuses.UNKNOWN_ERROR).json(error);
      });
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
        data: CommentModel.parseData(response.data)
      }));
  }
}

module.exports = new PostService();
