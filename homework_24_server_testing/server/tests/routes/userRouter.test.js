const request = require('supertest');
const server = require('../../src/server');
const { mock } = require('../../mocks/axios');
const user = require('../../mocks/user');
const constants = require('../../mocks/constants');

describe('User Router', () => {
  it('user should return user list', async () => {
    mock.onGet('/user')
      .replyOnce(constants.successStatus, JSON.stringify(user.userListMockData));

    const result = await request(server).get('/proxy/user').send();

    expect(result.statusCode).toBe(constants.successStatus);
    expect(result.text).toEqual(JSON.stringify({ data: user.userListMockData }));
  });

  it('user should return error', async () => {
    mock.onGet('/user').replyOnce(constants.errorStatus);

    const result = await request(server).get('/proxy/user').send();

    expect(result.statusCode).toBe(constants.errorStatus);
    expect(JSON.parse(result.text).message).toBe(constants.errorText);
  })

  it('user/:id should return user', async () => {
    mock
      .onGet(/\/user\/\w+/)
      .replyOnce(constants.successStatus, JSON.stringify(user.userMockData));

    const result = await request(server).get('/proxy/user/12345').send();

    expect(result.statusCode).toBe(constants.successStatus);
    expect(result.text).toEqual(JSON.stringify({ data: user.userProcessedMockData }));
  });

  it('user/:id should return error', async () => {
    mock.onGet(/\/user\/\w+/).replyOnce(constants.errorStatus);

    const result = await request(server).get('/proxy/user/12345').send();

    expect(result.statusCode).toBe(constants.errorStatus);
    expect(JSON.parse(result.text).message).toBe(constants.errorText);
  });

  it('user/:id/post should return posts list', async() => {
    mock
      .onGet(/\/user\/\w+\/post/)
      .replyOnce(constants.successStatus, JSON.stringify(user.userPostsListMockData));

    const result = await request(server).get('/proxy/user/12345/post').send();

    expect(result.statusCode).toBe(constants.successStatus);
    expect(result.text).toEqual(JSON.stringify({ data: user.userPostsListMockData }));
  });

  it('user/:id/post should return error', async() => {
    mock.onGet(/\/user\/\w+\/post/).replyOnce(constants.errorStatus);

    const result = await request(server).get('/proxy/user/12345/post').send();

    expect(result.statusCode).toBe(constants.errorStatus);
    expect(JSON.parse(result.text).message).toBe(constants.errorText);
  });

  it('user/:id should return updatedData', async() => {
    mock
      .onPut(/\/user\/\w+/)
      .replyOnce(constants.successStatus, JSON.stringify(user.userMockData));

    const result = await request(server).put('/proxy/user/12345').send();

    expect(result.statusCode).toBe(constants.successStatus);
    expect(result.text).toEqual(JSON.stringify({ data: user.userMockData }));
  });

  it('user/:id should return error', async() => {
    mock.onPut(/\/user\/\w+/).replyOnce(constants.errorStatus);

    const result = await request(server).put('/proxy/user/12345').send();

    expect(result.statusCode).toBe(constants.errorStatus);
    expect(JSON.parse(result.text).message).toBe(constants.errorText);
  });

  it('user/create should return new user data', async() => {
    mock
      .onPost('/user/create')
      .replyOnce(constants.successStatus, JSON.stringify(user.userMockData));

    const result = await request(server).post('/proxy/user/create').send();

    expect(result.statusCode).toBe(constants.successStatus);
    expect(result.text).toEqual(JSON.stringify({ data: user.userMockData }));
  });

  it('user/create should return error', async() => {
    mock.onPost('/user/create').replyOnce(constants.errorStatus);

    const result = await request(server).post('/proxy/user/create').send();

    expect(result.statusCode).toBe(constants.errorStatus);
    expect(JSON.parse(result.text).message).toBe(constants.errorText);
  });
});
