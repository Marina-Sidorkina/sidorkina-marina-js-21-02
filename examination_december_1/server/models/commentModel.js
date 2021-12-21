const parseDate = require('../utils/parseDate');

class CommentModel {
  constructor(data) {
    this.owner = {
      id: data['owner']['id'],
      firstName: data['owner']['firstName'],
      lastName: data['owner']['lastName'],
      picture: data['owner']['picture']
    };
    this.publishDate = parseDate(data['publishDate']);
    this.message = data['message'];
    this.id = data['id'];
  }

  static parseDatum(data) {
    return new CommentModel(data);
  }

  static parseData(data) {
    return {
      ...data,
      data: data.data.map(CommentModel.parseDatum)
    }
  }
}

module.exports = CommentModel;
