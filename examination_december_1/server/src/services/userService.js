const UserRepository = require('../repositories/userRepository');
const UserAction = require('../actions/userAction');
const DUMMY_API_SETTINGS = require('../../api/dummyApi/constants');
const { statuses } = require('../../config/serverConfig');
const UserModel = require('../../models/userModel');
const logger = require('../logger');
const format = require('string-format');
const { userService: messages } = require('../../constants/loggerMessages');

class UserService {
  getUsersList(req, res) {
    logger.info(format(messages.GET_USERS_LIST_INVOKE,
      req.query[DUMMY_API_SETTINGS.query.page],
      req.query[DUMMY_API_SETTINGS.query.limit]));

    UserRepository.getUsersList(
      req.query[DUMMY_API_SETTINGS.query.page],
      req.query[DUMMY_API_SETTINGS.query.limit])
      .then((response) => {
        logger.info(format(messages.GET_USER_LIST_SUCCESS,
          statuses.OK,
          JSON.stringify(response)));

        res.status(statuses.OK).json({ data: response });
      })
      .catch((error) => {
        logger.info(format(messages.GET_USER_LIST_ERROR, statuses.UNKNOWN_ERROR, error));
        res.status(statuses.UNKNOWN_ERROR).json(error);
      });

  }

  getUserById(req, res) {
    logger.info(format(messages.GET_USER_BY_ID_INVOKE, req.params.id));

    UserRepository.getUserById(req.params.id)
      .then((response) => {
        const data = UserModel.parseDatum(response);

        logger.info(format(messages.GET_USER_BY_ID_SUCCESS,
          statuses.OK,
          JSON.stringify(data)));

        res.status(statuses.OK).json({ data: data })
      })
      .catch((error) => {
        logger.info(format(messages.GET_USER_BY_ID_ERROR, statuses.UNKNOWN_ERROR, error));
        res.status(statuses.UNKNOWN_ERROR).json(error);
      });
  }

  updateUserById(req, res) {
    UserAction.updateUserById(req.params.id, req.body)
      .then((response) => res.status(statuses.OK).json({
        data: response.data
      }));
  }

  createUser(req, res) {
    UserAction.createUser(req.body)
      .then((response) => res.status(statuses.OK).json({
        data: response.data
      }));
  }

  deleteUserById(req, res) {
    UserAction.deleteUserById(req.params.id)
      .then((response) => res.status(statuses.OK).json({
        data: response.data
      }));
  }

  getUserPostsList(req, res) {
    logger.info(format(messages.GET_USER_POSTS_LIST_INVOKE,
      req.query[DUMMY_API_SETTINGS.query.page],
      req.query[DUMMY_API_SETTINGS.query.limit],
      req.params.id));

    UserRepository.getUserPostsList(
      req.params.id,
      req.query[DUMMY_API_SETTINGS.query.page],
      req.query[DUMMY_API_SETTINGS.query.limit])
      .then((response) => {
        logger.info(format(messages.GET_USER_POSTS_LIST_SUCCESS,
          statuses.OK,
          JSON.stringify(response)));

        res.status(statuses.OK).json({
          data: response
        })
      })
      .catch((error) => {
        logger.info(format(messages.GET_USER_POSTS_LIST_ERROR, statuses.UNKNOWN_ERROR, error));
        res.status(statuses.UNKNOWN_ERROR).json(error);
      });
  }
}

module.exports = new UserService();
