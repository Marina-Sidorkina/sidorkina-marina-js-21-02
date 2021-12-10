const UserRepository = require('../repositories/userRepository');
const UserAction = require('../actions/userAction');
const DUMMY_API_SETTINGS = require('../../api/dummyApi/constants');
const { statuses } = require('../../config/serverConfig');
const UserModel = require('../../models/userModel');

class UserService {
  getUsersList(req, res) {
    UserRepository.getUsersList(
      req.query[DUMMY_API_SETTINGS.query.page],
      req.query[DUMMY_API_SETTINGS.query.limit])
      .then((response) => res.status(statuses.OK).json({
        data: response.data
      }));
  }

  getUserById(req, res) {
    UserRepository.getUserById(req.params.id)
      .then((response) => res.status(statuses.OK).json({
        data: UserModel.parseDatum(response.data)
      }));
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
    UserRepository.getUserPostsList(
      req.params.id,
      req.query[DUMMY_API_SETTINGS.query.page],
      req.query[DUMMY_API_SETTINGS.query.limit])
      .then((response) => res.status(statuses.OK).json({
        data: response.data
      }));
  }
}

module.exports = new UserService();
