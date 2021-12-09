const DUMMY_API_SETTINGS = require('../../api/dummyApi/constants');
const dummyApi = require('../../api/dummyApi/index');

class UserRepository {
  getUsersList(page, limit) {
    return dummyApi.get(`/${DUMMY_API_SETTINGS.paths.user}`, {
      params: {
        page: page,
        limit: limit
      }
    })
  }

  getUserById(id) {
    return dummyApi.get(`/${DUMMY_API_SETTINGS.paths.user}/${id}`)
  }
}

module.exports = new UserRepository();
