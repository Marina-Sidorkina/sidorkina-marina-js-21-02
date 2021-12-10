const parseDate = require('../utils/parseDate');

class PostModel {
  constructor(data) {
    this.id = data['id'];
    this.image = data['image'];
    this.owner = {
      id: data['owner']['id'],
      firstName: data['owner']['firstName'],
      lastName: data['owner']['lastName'],
      picture: data['owner']['picture'],
      title: data['owner']['title']
    };
    this.piblishDate = parseDate(data['publishDate']);
    this.text = data['text']
  }

  static parseDatum(data) {
    return new PostModel(data);
  }

  static parseData(data) {
    return {
      ...data,
      data: data.data.map(PostModel.parseDatum)
    }
  }
}

module.exports = PostModel;
