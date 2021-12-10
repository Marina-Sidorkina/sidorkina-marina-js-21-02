const DUMMY_API_SETTINGS = require('../../api/dummyApi/constants');
const dummyApi = require('../../api/dummyApi/index');

class UserRepository {
  getUsersList(page, limit) {
    return dummyApi.get(`/${DUMMY_API_SETTINGS.paths.user}`, {
      params: {
        [DUMMY_API_SETTINGS.query.page]: page,
        [DUMMY_API_SETTINGS.query.limit]: limit
      }
    });
  }

  getUserById(id) {
    return dummyApi.get(`/${DUMMY_API_SETTINGS.paths.user}/${id}`);
  }

  getUserPostsList(userId, page, limit) {
    return dummyApi.get(`/user/${userId}/post`, {
      params: {
        [DUMMY_API_SETTINGS.query.page]: page,
        [DUMMY_API_SETTINGS.query.limit]: limit
      }
    });
  }
}

module.exports = new UserRepository();
