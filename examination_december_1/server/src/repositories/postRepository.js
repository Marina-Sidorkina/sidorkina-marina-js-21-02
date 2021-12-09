const DUMMY_API_SETTINGS = require('../../api/dummyApi/constants');
const dummyApi = require('../../api/dummyApi/index');

class PostRepository {
  getPostsList(page, limit) {
    return dummyApi.get(`/${DUMMY_API_SETTINGS.paths.post}`, {
      params: {
        [DUMMY_API_SETTINGS.query.page]: page,
        [DUMMY_API_SETTINGS.query.limit]: limit
      }
    });
  }

  getPostById(id) {
    return dummyApi.get(`/${DUMMY_API_SETTINGS.paths.post}/${id}`);
  }
}

module.exports = new PostRepository();
