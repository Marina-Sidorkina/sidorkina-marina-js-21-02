const dummyApi = require("../../api/dummyApi/index");
const DUMMY_API_SETTINGS = require("../../api/dummyApi/constants");

class UserAction {
  updateUserById(id, data) {
    return dummyApi.put(
      `/${DUMMY_API_SETTINGS.paths.user}/${id}`, data);
  }

  createUser(data) {
    return dummyApi.post(
      `/${DUMMY_API_SETTINGS.paths.user}/${DUMMY_API_SETTINGS.paths.userCreate}`, data);
  }

  deleteUserById(id) {
    return dummyApi.delete(
      `/${DUMMY_API_SETTINGS.paths.user}/${id}`);
  }
}

module.exports = new UserAction();