const { mock } = require('../../mocks/axios');
const repository = require('../../src/repositories/userRepository');
const user = require('../../mocks/user');
const constants = require('../../mocks/constants');

describe('User Repository', () => {
  it('getUsersList should return resolve with data', () => {
    mock.onGet('/user', { params: { page: 0, limit: 5 } })
      .replyOnce(constants.successStatus,  JSON.stringify(user.userListMockData));

      repository.getUsersList(0, 5)
      .then((response) => {
        expect(response).toStrictEqual(user.userListMockData);
      });
  });

  it('getUsersList should return reject with error', () => {
    mock.onGet('/user', { params: { page: 0, limit: 5 } })
      .replyOnce(constants.errorStatus);

      repository.getUsersList(0, 5)
      .catch((error) => {
        expect(error.message).toBe(constants.errorText);
      });
  });

  it('getUserById should return resolve with data', () => {
    mock.onGet(/\/user\/\w+/)
      .replyOnce(constants.successStatus, JSON.stringify(user.userMockData));

    repository.getUserById('12345')
      .then((response) => {
        expect(response).toStrictEqual(user.userMockData);
      });
  });

  it('getUserById should return reject with error', () => {
    mock.onGet(/\/user\/\w+/).replyOnce(constants.errorStatus);

    repository.getUserById('12345')
      .catch((error) => {
        expect(error.message).toBe(constants.errorText);
      });
  });

  it('getUserPostsList should return resolve with data', () => {
    mock.onGet(/\/user\/\w+\/post/, { params: { page: 0, limit: 1 } })
      .replyOnce(constants.successStatus,
        JSON.stringify(user.userPostsListMockData));

    repository.getUserPostsList('12345', 0, 1)
      .then((response) => {
        expect(response).toStrictEqual(user.userPostsListMockData);
      });
  });

  it('getUserPostsList should return reject with error', () => {
    mock.onGet(/\/user\/\w+\/post/, { params: { page: 0, limit: 1 } })
      .replyOnce(constants.errorStatus);

    repository.getUserPostsList('12345', 0, 1)
      .catch((error) => {
        expect(error.message).toBe(constants.errorText);
      });
  });
});
