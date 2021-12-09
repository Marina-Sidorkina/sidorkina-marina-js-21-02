const DUMMY_API_SETTINGS = {
  baseUrl: 'https://dummyapi.io/data/v1/',
  paths: {
    user: 'user',
    post: 'post',
    comment: 'comment',
    userCreate: 'create'
  },
  query: {
    page: 'page',
    limit: 'limit',
  },
  params: {
    id: ':id'
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
