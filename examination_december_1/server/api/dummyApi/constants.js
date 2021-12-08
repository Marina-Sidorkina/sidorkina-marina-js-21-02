const DUMMY_API_SETTINGS = {
  baseUrl: 'https://dummyapi.io/data/v1/',
  paths: {
    user: 'user',
    post: 'post',
    comment: 'comment',
    userCreate: 'user/create'
  },
  params: {
    page: 'page',
    limit: 'limit',
  },
  headers: {
    id: {
      name: "app-id",
      value: '61a253f1dccd096821d20d74'
    },
    contentType: {
      name: 'Content-Type',
      value: 'application/json'
    }
  }
}

module.exports = DUMMY_API_SETTINGS;
