const request = require('supertest');
const server = require('../../src/server');
const { mock } = require('../../mocks/axios');
const post = require('../../mocks/post');
const constants = require('../../mocks/constants');

describe('Post Router', () => {
  it('post should return posts list', async () => {
    mock.onGet('/post')
      .replyOnce(constants.successStatus, JSON.stringify(post.postListMockData));

    const result = await request(server).get('/proxy/post').send();

    expect(result.statusCode).toBe(constants.successStatus);
    expect(result.text).toEqual(JSON.stringify({ data: post.postListMockData }));
  });

  it('post should return error', async () => {
    mock.onGet('/post').replyOnce(constants.errorStatus);

    const result = await request(server).get('/proxy/post').send();

    expect(result.statusCode).toBe(constants.errorStatus);
    expect(JSON.parse(result.text).message).toBe(constants.errorText);
  })

  it('getPostById should return post', async () => {
    mock
      .onGet(/\/post\/\w+/)
      .replyOnce(constants.successStatus, JSON.stringify(post.postMockData));

    const result = await request(server).get('/proxy/post/12345').send();

    expect(result.statusCode).toBe(constants.successStatus);
    expect(result.text).toEqual(JSON.stringify({ data: post.postProcessedMockData }));
  });

  it('getPostById should return error', async () => {
    mock.onGet(/\/post\/\w+/).replyOnce(constants.errorStatus);

    const result = await request(server).get('/proxy/post/12345').send();

    expect(result.statusCode).toBe(constants.errorStatus);
    expect(JSON.parse(result.text).message).toBe(constants.errorText);
  });

  it('post/:id/comment should return comments list', async() => {
    mock
      .onGet(/\/post\/\w+\/comment/)
      .replyOnce(constants.successStatus, JSON.stringify(post.postCommentsMockData));

    const result = await request(server).get('/proxy/post/12345/comment').send();

    expect(result.statusCode).toBe(constants.successStatus);
    expect(result.text).toEqual(JSON.stringify({ data: post.postCommentsProcessedMockData }));
  });

  it('post/:id/post should return error', async() => {
    mock.onGet(/\/post\/\w+\/comment/).replyOnce(constants.errorStatus);

    const result = await request(server).get('/proxy/post/12345/comment').send();

    expect(result.statusCode).toBe(constants.errorStatus);
    expect(JSON.parse(result.text).message).toBe(constants.errorText);
  });
});
