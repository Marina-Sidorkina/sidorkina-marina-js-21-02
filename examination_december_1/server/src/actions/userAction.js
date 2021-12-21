const dummyApi = require("../../api/dummyApi/index");
const DUMMY_API_SETTINGS = require("../../api/dummyApi/constants");
const logger = require('../logger');
const format = require('string-format');
const { userAction: messages } = require('../../constants/loggerMessages');

class UserAction {
  updateUserById(id, data) {
    logger.info(format(messages.UPDATE_USER_BY_ID_INVOKE, id, JSON.stringify(data)));
    return dummyApi.put(
      `/${DUMMY_API_SETTINGS.paths.user}/${id}`, data)
      .then((response) => {
        logger.info(format(messages.UPDATE_USER_BY_ID_SUCCESS, JSON.stringify(response.data)));
        return response.data;
      })
      .catch((error) => {
        logger.error(format(messages.UPDATE_USER_BY_ID_ERROR, JSON.stringify(error)));
        return Promise.reject(error);
      });
  }

  createUser(data) {
    logger.info(format(messages.CREATE_USER_INVOKE, JSON.stringify(data)));
    return dummyApi.post(
      `/${DUMMY_API_SETTINGS.paths.user}/${DUMMY_API_SETTINGS.paths.userCreate}`, data)
      .then((response) => {
        logger.info(format(messages.CREATE_USER_SUCCESS, JSON.stringify(response.data)));
        return response.data;
      })
      .catch((error) => {
        logger.error(format(messages.CREATE_USER_ERROR, JSON.stringify(error)));
        return Promise.reject(error);
      });
  }
}

module.exports = new UserAction();
