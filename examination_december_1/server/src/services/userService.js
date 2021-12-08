const UserRepository = require('../repositories/userRepository');

class UserService {
  getUsersList(req, res) {
    UserRepository.getUsersList()
      .then((response) => res.status(200).send({
        data: response.data
      }));
  }
}

module.exports = new UserService();
