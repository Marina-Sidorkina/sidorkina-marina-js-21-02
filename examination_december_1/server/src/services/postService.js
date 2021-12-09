const PostRepository = require('../repositories/postRepository');
const DUMMY_API_SETTINGS = require("../../api/dummyApi/constants");

class PostService {
  getPostsList(req, res) {
    PostRepository.getPostsList(
      req.query[DUMMY_API_SETTINGS.query.page],
      req.query[DUMMY_API_SETTINGS.query.limit])
      .then((response) => res.status(200).send({
        data: response.data
      }));
  }

  getPostById(req, res) {
    PostRepository.getPostById(req.params.id)
      .then((response) => res.status(200).send({
        data: response.data
      }));
  }
}

module.exports = new PostService();
