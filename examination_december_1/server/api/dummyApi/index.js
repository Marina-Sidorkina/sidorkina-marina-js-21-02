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

module.exports = dummyApi;
