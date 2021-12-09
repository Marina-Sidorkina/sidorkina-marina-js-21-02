const UserRepository = require('../repositories/userRepository');
const UserAction = require('../actions/userAction');

class UserService {
  getUsersList(req, res) {
    UserRepository.getUsersList(req.query.page, req.query.limit)
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
}

module.exports = new UserService();
