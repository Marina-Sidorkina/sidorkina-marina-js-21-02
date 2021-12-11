const DUMMY_API_SETTINGS = require('../../api/dummyApi/constants');
const dummyApi = require('../../api/dummyApi/index');
const logger = require('../logger');
const format = require('string-format');
const { postRepository: messages } = require('../../constants/loggerMessages');

class PostRepository {
  getPostsList(page, limit) {
    logger.info(format(messages.GET_POSTS_LIST_INVOKE, page, limit));
    return dummyApi.get(`/${DUMMY_API_SETTINGS.paths.post}`, {
      params: {
        [DUMMY_API_SETTINGS.query.page]: page,
        [DUMMY_API_SETTINGS.query.limit]: limit
      }
    })
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
    return dummyApi.get(`/${DUMMY_API_SETTINGS.paths.post}/${id}`)
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
    return dummyApi.get(`/post/${postId}/comment`, {
      params: {
        [DUMMY_API_SETTINGS.query.page]: page,
        [DUMMY_API_SETTINGS.query.limit]: limit
      }
    });
  }
}

module.exports = new PostRepository();
