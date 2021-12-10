const parseDate = require('../utils/parseDate');

class UserModel {
  constructor(data) {
    this.id = data['id'];
    this.firstName = data['firstName'];
    this.lastName = data['lastName'];
    this.title = data['title'];
    this.gender = data['gender'];
    this.email = data['email'];
    this.phone = data['phone'];
    this.dateOfBirth = parseDate(data['dateOfBirth']);
    this.registerDate = parseDate(data['registerDate']);
    this.picture = data['picture'];
  }

  static parseDatum(data) {
    return new UserModel(data);
  }
}

module.exports = UserModel;
