const DUMMY_API_SETTINGS = require('../../api/dummyApi/constants');
const dummyApi = require('../../api/dummyApi/index');

class UserRepository {
  getUsersList() {
    return dummyApi.get(`/${DUMMY_API_SETTINGS.paths.user}`, {
      params: {
        page: 0,
        limit: 10
      }
    })
  }
}

module.exports = new UserRepository();
