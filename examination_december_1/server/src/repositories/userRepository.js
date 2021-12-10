const DUMMY_API_SETTINGS = require('../../api/dummyApi/constants');
const dummyApi = require('../../api/dummyApi/index');
const logger = require('../logger');
const format = require('string-format');
const { userRepository: messages } = require('../../constants/loggerMessages');

class UserRepository {
  getUsersList(page, limit) {
    logger.info(format(messages.GET_USERS_LIST_INVOKE, page, limit));
    return dummyApi.get(`/${DUMMY_API_SETTINGS.paths.user}`, {
      params: {
        [DUMMY_API_SETTINGS.query.page]: page,
        [DUMMY_API_SETTINGS.query.limit]: limit
      }
    })
      .then((response) => {
        logger.info(format(messages.GET_USER_LIST_SUCCESS, JSON.stringify(response.data)));
        return response.data;
      })
      .catch((error) => {
        logger.error(format(messages.GET_USER_LIST_ERROR, JSON.stringify(error)));
        return Promise.reject(error);
      });
  }

  getUserById(id) {
    return dummyApi.get(`/${DUMMY_API_SETTINGS.paths.user}/${id}`);
  }

  getUserPostsList(userId, page, limit) {
    return dummyApi.get(`/user/${userId}/post`, {
      params: {
        [DUMMY_API_SETTINGS.query.page]: page,
        [DUMMY_API_SETTINGS.query.limit]: limit
      }
    });
  }
}

module.exports = new UserRepository();
