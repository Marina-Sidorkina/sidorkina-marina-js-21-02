import loginReducer from '../../../redux/reducers/login';
import {
  HIDE_AUTHORIZATION_LOADING, LOAD_AUTHORIZATION_ERROR, RESET_AUTHORIZATION_ERROR, RESET_AUTHORIZED_USER,
  SHOW_AUTHORIZATION_LOADING,
  UPDATE_AUTHORIZATION_INPUT_VALUE,
  UPDATE_AUTHORIZED_USER_DATA
} from '../../../redux/constants/login';

const initialState = {
  data: {
    authorizedUserId: '',
    authorizedUserName: '',
    authorizedUserPicture: '',
    authorizationError: '',
    isLoading: false,
    error: false,
    inputValue: ''
  }
};

const updatedData = {
  id: '12345',
  firstName: 'Name',
  picture: 'picture'
};

const testValue = 'value';

describe('loginReducer test', () => {
  test('UPDATE_AUTHORIZED_USER_DATA', () => {
    expect(loginReducer(initialState, { type: UPDATE_AUTHORIZED_USER_DATA, payload: updatedData }))
      .toEqual({
        data: {
          ...initialState.data,
          authorizedUserId: updatedData.id,
          authorizedUserName: updatedData.firstName,
          authorizedUserPicture: updatedData.picture
        }
      });
  });

  test('UPDATE_AUTHORIZATION_INPUT_VALUE', () => {
    expect(loginReducer(initialState, { type: UPDATE_AUTHORIZATION_INPUT_VALUE, payload: testValue }))
      .toEqual({
        data: {
          ...initialState.data,
          inputValue: testValue
        }
      });
  });

  test('SHOW_AUTHORIZATION_LOADING', () => {
    expect(loginReducer(initialState, { type: SHOW_AUTHORIZATION_LOADING }))
      .toEqual({
        data: {
          ...initialState.data,
          isLoading: true,
          error: false
        }
      });
  });

  test('HIDE_AUTHORIZATION_LOADING', () => {
    expect(loginReducer(initialState, { type: HIDE_AUTHORIZATION_LOADING }))
      .toEqual({
        data: {
          ...initialState.data,
          isLoading: false,
        }
      });
  });

  test('LOAD_AUTHORIZATION_ERROR', () => {
    expect(loginReducer(initialState, { type: LOAD_AUTHORIZATION_ERROR }))
      .toEqual({
        data: {
          ...initialState.data,
          isLoading: false,
          error: true
        }
      });
  });

  test('RESET_AUTHORIZATION_ERROR', () => {
    expect(loginReducer(initialState, { type: RESET_AUTHORIZATION_ERROR }))
      .toEqual({
        data: {
          ...initialState.data,
          error: false
        }
      });
  });

  test('RESET_AUTHORIZED_USER', () => {
    expect(loginReducer(initialState, { type: RESET_AUTHORIZED_USER }))
      .toEqual({
        data: {
          ...initialState.data,
          authorizedUserId: '',
          authorizedUserName: '',
          authorizedUserPicture: ''
        }
      });
  });

  test('UNKNOWN ACTION', () => {
    expect(loginReducer(initialState, { type: 'UNKNOWN' })).toEqual(initialState);
  });
});
