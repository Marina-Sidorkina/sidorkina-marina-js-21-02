import * as actions from '../../../redux/actions/login';
import {
  HIDE_AUTHORIZATION_LOADING,
  LOAD_AUTHORIZATION_ERROR,
  RESET_AUTHORIZATION_ERROR,
  RESET_AUTHORIZED_USER,
  SHOW_AUTHORIZATION_LOADING,
  UPDATE_AUTHORIZATION_INPUT_VALUE,
  UPDATE_AUTHORIZED_USER_DATA
} from '../../../redux/constants/login';
import * as proxy from '../../../api/proxy/index';

jest.mock('../../../api/proxy/index');

const userFullInfo = {
  data: {
    data: {
      id: 'value',
      title: 'value',
      firstName: 'value',
      lastName: 'value',
      gender: 'value',
      email: 'value',
      dateOfBirth: {
        enDate: 'value',
        ruDate: 'value',
        enDateAndTime: 'value',
        ruDateAndTime: 'value',
      },
      registerDate: {
        enDate: 'value',
        ruDate: 'value',
        enDateAndTime: 'value',
        ruDateAndTime: 'value',
      },
      phone: 'value',
      picture: 'value',
      location: {
        street: 'value',
        city: 'value',
        state: 'value',
        country: 'value',
        timezone: 'value',
      }
    }
  }
};

const testValue = 'value';
const emptyFunction = () => {};

describe('login actions', () => {
  test('updateAuthorizedUserDataAction should return action object', () => {
    expect(actions.updateAuthorizedUserDataAction(userFullInfo.data.data)).toEqual({
      type: UPDATE_AUTHORIZED_USER_DATA,
      payload: userFullInfo.data.data
    });
  });

  test('updateAuthorizationInputValue should return action object', () => {
    expect(actions.updateAuthorizationInputValue(testValue)).toEqual({
      type: UPDATE_AUTHORIZATION_INPUT_VALUE,
      payload: testValue
    });
  });

  test('hideLoadingAction should return action object', () => {
    expect(actions.hideLoadingAction()).toEqual({
      type: HIDE_AUTHORIZATION_LOADING
    });
  });

  test('resetAuthorizedUserAction should return action object', () => {
    expect(actions.resetAuthorizedUserAction()).toEqual({
      type: RESET_AUTHORIZED_USER
    });
  });

  test('resetAuthorizationErrorAction should return action object', () => {
    expect(actions.resetAuthorizationErrorAction()).toEqual({
      type: RESET_AUTHORIZATION_ERROR
    });
  });

  test('authorizeUser should call resetAuthorizationErrorAction', () => {
    // @ts-ignore
    proxy.getUserInfo.mockResolvedValue(userFullInfo);
    const authorizeUserAction = actions.authorizeUser(testValue, testValue);
    const dispatch = jest.fn();

    authorizeUserAction(dispatch);

    expect(dispatch).toBeCalledWith({
      type: RESET_AUTHORIZATION_ERROR
    });

    expect(dispatch).toBeCalledWith({
      type: SHOW_AUTHORIZATION_LOADING,
    });
  });

  test('authorizeUser should call updateAuthorizedUserDataAction', (done) => {
    // @ts-ignore
    proxy.getUserInfo.mockResolvedValue(userFullInfo);
    const historyMock = { push: jest.fn(), location: {}, listen: jest.fn() };
    const authorizeUserAction = actions.authorizeUser(testValue, historyMock);

    const dispatch = jest
      .fn()
      .mockImplementationOnce(emptyFunction)
      .mockImplementationOnce(emptyFunction)
      .mockImplementationOnce((action) => {
        expect(action).toEqual({
          type: UPDATE_AUTHORIZED_USER_DATA,
          payload: userFullInfo.data.data
        });
        done();
      });

    authorizeUserAction(dispatch);
  });

  test('authorizeUser should call loadErrorAction', (done) => {
    // @ts-ignore
    proxy.getUserInfo.mockRejectedValue(testValue);
    const authorizeUserAction = actions.authorizeUser(testValue, testValue);

    const dispatch = jest
      .fn()
      .mockImplementationOnce(emptyFunction)
      .mockImplementationOnce(emptyFunction)
      .mockImplementationOnce((action) => {
        expect(action).toEqual({
          type: LOAD_AUTHORIZATION_ERROR
        });
        done();
      });

    authorizeUserAction(dispatch);
  });
});
