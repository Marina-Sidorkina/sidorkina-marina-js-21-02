const axios = require('axios');
const DUMMY_API_SETTINGS = require('./constants');

axios
  .defaults
  .headers
  .post[DUMMY_API_SETTINGS.headers.contentType.name] = DUMMY_API_SETTINGS.headers.contentType.value;

axios
  .defaults
  .headers
  .put[DUMMY_API_SETTINGS.headers.contentType.name] = DUMMY_API_SETTINGS.headers.contentType.value;


const dummyApi = axios.create({
  baseURL: DUMMY_API_SETTINGS.baseUrl,
  headers: {
    [DUMMY_API_SETTINGS.headers.id.name]: DUMMY_API_SETTINGS.headers.id.value
  }
});

const getPostsList = (page, limit) => {
  return dummyApi.get(`/${DUMMY_API_SETTINGS.paths.post}`, {
    params: {
      [DUMMY_API_SETTINGS.query.page]: page,
      [DUMMY_API_SETTINGS.query.limit]: limit
    }
  });
};

const getPostById = (id) => {
  return dummyApi.get(`/${DUMMY_API_SETTINGS.paths.post}/${id}`);
};

const getPostCommentsList = (page, limit, postId) => {
  return dummyApi
    .get(`/${DUMMY_API_SETTINGS.paths.post}/${postId}/${DUMMY_API_SETTINGS.paths.comment}`, {
    params: {
      [DUMMY_API_SETTINGS.query.page]: page,
      [DUMMY_API_SETTINGS.query.limit]: limit
    }
  });
};

const getUsersList = (page, limit) => {
  return dummyApi.get(`/${DUMMY_API_SETTINGS.paths.user}`, {
    params: {
      [DUMMY_API_SETTINGS.query.page]: page,
      [DUMMY_API_SETTINGS.query.limit]: limit
    }
  });
};

const getUserById = (id) => {
  return dummyApi.get(`/${DUMMY_API_SETTINGS.paths.user}/${id}`);
};

const getUserPostsList = (page, limit, userId) => {
  return dummyApi.get(`/user/${userId}/post`, {
    params: {
      [DUMMY_API_SETTINGS.query.page]: page,
      [DUMMY_API_SETTINGS.query.limit]: limit
    }
  });
};

const updateUserById = (id, data) => {
  return dummyApi.put(
    `/${DUMMY_API_SETTINGS.paths.user}/${id}`, data);
};

const createUser = (data) => {
  return dummyApi.post(
    `/${DUMMY_API_SETTINGS.paths.user}/${DUMMY_API_SETTINGS.paths.userCreate}`, data);
};

module.exports = {
  getPostsList,
  getPostById,
  getPostCommentsList,
  getUsersList,
  getUserById,
  getUserPostsList,
  updateUserById,
  createUser,
  dummyApi
};
