const UserRepository = require('../repositories/userRepository');
const UserAction = require('../actions/userAction');
const DUMMY_API_SETTINGS = require('../../api/dummyApi/constants');

class UserService {
  getUsersList(req, res) {
    UserRepository.getUsersList(
      req.query[DUMMY_API_SETTINGS.query.page],
      req.query[DUMMY_API_SETTINGS.query.limit])
      .then((response) => res.status(200).send({
        data: response.data
      }));
  }

  getUserById(req, res) {
    UserRepository.getUserById(req.params.id)
      .then((response) => res.status(200).send({
        data: response.data
      }));
  }

  updateUserById(req, res) {
    UserAction.updateUserById(req.params.id, req.body)
      .then((response) => res.status(200).send({
        data: response.data
      }));
  }

  createUser(req, res) {
    UserAction.createUser(req.body)
      .then((response) => res.status(200).send({
        data: response.data
      }));
  }

  deleteUserById(req, res) {
    UserAction.deleteUserById(req.params.id)
      .then((response) => res.status(200).send({
        data: response.data
      }));
  }

  getUsersPostsList(req, res) {
    UserRepository.getUsersPostsList(
      req.params.id,
      req.query[DUMMY_API_SETTINGS.query.page],
      req.query[DUMMY_API_SETTINGS.query.limit])
      .then((response) => res.status(200).send({
        data: response.data
      }));
  }
}

module.exports = new UserService();
