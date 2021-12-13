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
    logger.info(format(messages.GET_POST_BY_ID_INVOKE, req.params.id));
    PostRepository.getPostById(req.params.id)
      .then((response) => {
        const data = PostModel.parseDatum(response);

        logger.info(format(messages.GET_POST_BY_ID_SUCCESS,
          statuses.OK,
          JSON.stringify(data)));

        res.status(statuses.OK).json({ data: data })
      })
      .catch((error) => {
        logger.info(format(messages.GET_POST_BY_ID_ERROR, statuses.UNKNOWN_ERROR, error));
        res.status(statuses.UNKNOWN_ERROR).json(error);
      });
  }

  getPostCommentsList(req, res) {
    logger.info(format(messages.GET_POST_COMMENTS_LIST_INVOKE,
      req.query[DUMMY_API_SETTINGS.query.page],
      req.query[DUMMY_API_SETTINGS.query.limit],
      req.params.id));

    PostRepository.getPostCommentsList(
      req.params.id,
      req.query[DUMMY_API_SETTINGS.query.page],
      req.query[DUMMY_API_SETTINGS.query.limit])
      .then((response) => {
        const data = CommentModel.parseData(response);
        logger.info(format(messages.GET_POST_COMMENTS_LIST_SUCCESS,
          statuses.OK,
          JSON.stringify(data)));

        res.status(statuses.OK).json({ data: data });
      })
      .catch((error) => {
        logger.info(format(messages.GET_POST_COMMENTS_LIST_ERROR, statuses.UNKNOWN_ERROR, error));
        res.status(statuses.UNKNOWN_ERROR).json(error);
      });
  }
}

module.exports = new PostService();
