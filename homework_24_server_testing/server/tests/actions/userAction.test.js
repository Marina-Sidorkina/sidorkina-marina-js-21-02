const { mock } = require('../../mocks/axios');
const action = require('../../src/actions/userAction');
const user = require('../../mocks/user');
const constants = require('../../mocks/constants');

describe('User Action', () => {
  it('updateUserById should return resolve with data', () => {
    mock.onPut(/\/user\/\w+/, user.userUpdatedMockData)
      .replyOnce(constants.successStatus, JSON.stringify(user.userMockData));

    action.updateUserById('12345', user.userUpdatedMockData)
      .then((response) => {
        expect(response).toStrictEqual(user.userMockData);
      });
  });

  it('updateUserById should return reject with error', () => {
    mock.onPut(/\/user\/\w+/, user.userUpdatedMockData)
      .replyOnce(constants.errorStatus);

      action.updateUserById('12345', user.userUpdatedMockData)
      .catch((error) => {
        expect(error.message).toBe(constants.errorText);
      });
  });

  it('createUser should return resolve with data', () => {
    mock.onPost('/user/create', user.userUpdatedMockData)
      .replyOnce(constants.successStatus,  JSON.stringify(user.userMockData));

    action.createUser(user.userUpdatedMockData)
      .then((response) => {
        expect(response).toStrictEqual(user.userMockData);
      });
  });

  it('createUser should return reject with error', () => {
    mock.onPost('/user/create', user.userUpdatedMockData)
      .replyOnce(constants.errorStatus)

    action.createUser(user.userUpdatedMockData)
      .catch((error) => {
        expect(error.message).toBe(constants.errorText);
      });
  });
});
