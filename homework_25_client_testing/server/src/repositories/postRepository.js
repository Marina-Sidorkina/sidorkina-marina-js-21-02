const { getPostsList, getPostById, getPostCommentsList } = require('../api/dummyApi/index');
const logger = require('../logger');
const format = require('string-format');
const { postRepository: messages } = require('../constants/loggerMessages');

class PostRepository {
  getPostsList(page, limit) {
    logger.info(format(messages.GET_POSTS_LIST_INVOKE, page, limit));
    return getPostsList(page, limit)
      .then((response) => {
        logger.info(format(messages.GET_POSTS_LIST_SUCCESS, JSON.stringify(response.data)));
        return response.data;
      })
      .catch((error) => {
        logger.error(format(messages.GET_POSTS_LIST_ERROR, JSON.stringify(error)));
        return Promise.reject(error);
      });
  }

  getPostById(id) {
    logger.info(format(messages.GET_POST_BY_ID_INVOKE, id));
    return getPostById(id)
      .then((response) => {
        logger.info(format(messages.GET_POST_BY_ID_SUCCESS, JSON.stringify(response.data)));
        return response.data;
      })
      .catch((error) => {
        logger.error(format(messages.GET_POST_BY_ID_ERROR, JSON.stringify(error)));
        return Promise.reject(error);
      });
  }

  getPostCommentsList(postId, page, limit) {
    logger.info(format(messages.GET_POST_COMMENTS_LIST_INVOKE, page, limit, postId));
    return getPostCommentsList(page, limit, postId)
      .then((response) => {
        logger.info(format(messages.GET_POST_COMMENTS_LIST_SUCCESS, JSON.stringify(response.data)));
        return response.data;
      })
      .catch((error) => {
        logger.error(format(messages.GET_POST_COMMENTS_LIST_ERROR, JSON.stringify(error)));
        return Promise.reject(error);
      });
  }
}

module.exports = new PostRepository();
