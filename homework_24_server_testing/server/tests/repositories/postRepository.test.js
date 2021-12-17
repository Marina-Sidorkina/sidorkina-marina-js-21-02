const { mock } = require('../../mocks/axios');
const repository = require('../../src/repositories/postRepository');
const post = require('../../mocks/post');
const constants = require('../../mocks/constants');

describe('Post Repository', () => {
  it('getPostsList should return resolve with data', () => {
    mock
      .onGet('/post', { params: { page: 0, limit: 5 } })
      .replyOnce(constants.successStatus, JSON.stringify(post.postListMockData));

      repository.getPostsList(0, 5)
      .then((response) => {
        expect(response).toStrictEqual(post.postListMockData);
      });
  });

  it('getPostsList should return reject with error', () => {
    mock.onGet('/post', { params: { page: 0, limit: 5 } })
      .replyOnce(constants.errorStatus);

    repository.getPostsList(0, 5)
      .catch((error) => {
        expect(error.message).toBe(constants.errorText);
      });
  });

  it('getPostById should return resolve with data', () => {
    mock.onGet(/\/post\/\w+/)
      .replyOnce(constants.successStatus,
        JSON.stringify(post.postMockData));

      repository.getPostById('12345')
      .then((response) => {
        expect(response).toStrictEqual(post.postMockData);
      });
  });

  it('getPostById should return reject with error', () => {
    mock.onGet(/\/post\/\w+/).replyOnce(constants.errorStatus);

      repository.getPostById('12345')
      .catch((error) => {
        expect(error.message).toBe(constants.errorText);
      });
  });

  it('getPostCommentsList should return resolve with data', () => {
    mock.onGet(/\/post\/\w+\/comment/, { params: { page: 0, limit: 1 } })
      .replyOnce(constants.successStatus,
        JSON.stringify(post.postCommentMockData));

    repository.getPostCommentsList('12345', 0, 1)
      .then((response) => {
        expect(response).toStrictEqual(post.postCommentMockData);
      });
  });

  it('getPostCommentsList should return reject with error', () => {
    mock.onGet(/\/post\/\w+\/comment/, { params: { page: 0, limit: 1 } })
      .replyOnce(constants.errorStatus);

      repository.getPostCommentsList('12345', 0, 1)
      .catch((error) => {
        expect(error.message).toBe(constants.errorText);
      });
  });
});
