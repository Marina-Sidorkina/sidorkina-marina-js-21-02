const dummyApi = require("../../api/dummyApi/index");
const DUMMY_API_SETTINGS = require("../../api/dummyApi/constants");

class UserAction {
  updateUserById(id, data) {
    return dummyApi.put(
      `/${DUMMY_API_SETTINGS.paths.user}/${id}`, data);
  }
}

module.exports = new UserAction();
