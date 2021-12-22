import userModalReducer from '../../../redux/reducers/userModalForm';
import {
  CLOSE_USER_MODAL,
  HIDE_USER_MODAL_ERROR, HIDE_USER_MODAL_LOADING,
  OPEN_USER_MODAL,
  RESET_USER_MODAL_VALUES,
  SHOW_USER_MODAL_ERROR,
  SHOW_USER_MODAL_LOADING,
  UPDATE_USER_MODAL_DATE_OF_BIRTH,
  UPDATE_USER_MODAL_GENDER,
  UPDATE_USER_MODAL_NAME,
  UPDATE_USER_MODAL_PHONE,
  UPDATE_USER_MODAL_PICTURE
} from '../../../redux/constants/userModalForm';

const testValue = 'value';
const initialState = {
  values: {
    name: '',
    gender: '',
    dateOfBirth: '',
    registrationDate: '',
    email: '',
    phone: '',
    picture: ''
  },
  error: false,
  isLoading: false,
  isOpened: false
};

describe('userModalReducer test', () => {
  test('OPEN_USER_MODAL', () => {
    expect(userModalReducer(initialState, { type: OPEN_USER_MODAL }))
      .toEqual({
        ...initialState,
        values: {
          ...initialState.values
        },
        isOpened: true
      });
  });

  test('CLOSE_USER_MODAL', () => {
    expect(userModalReducer(initialState, { type: CLOSE_USER_MODAL }))
      .toEqual({
        ...initialState,
        values: {
          ...initialState.values
        },
        isOpened: false
      });
  });

  test('UPDATE_USER_MODAL_NAME', () => {
    expect(userModalReducer(initialState, { type: UPDATE_USER_MODAL_NAME, payload: testValue }))
      .toEqual({
        ...initialState,
        values: {
          ...initialState.values,
          name: testValue
        }
      });
  });

  test('UPDATE_USER_MODAL_GENDER', () => {
    expect(userModalReducer(initialState, { type: UPDATE_USER_MODAL_GENDER, payload: testValue }))
      .toEqual({
        ...initialState,
        values: {
          ...initialState.values,
          gender: testValue
        }
      });
  });

  test('UPDATE_USER_MODAL_DATE_OF_BIRTH', () => {
    expect(userModalReducer(initialState, { type: UPDATE_USER_MODAL_DATE_OF_BIRTH, payload: testValue }))
      .toEqual({
        ...initialState,
        values: {
          ...initialState.values,
          dateOfBirth: testValue
        }
      });
  });

  test('UPDATE_USER_MODAL_PHONE', () => {
    expect(userModalReducer(initialState, { type: UPDATE_USER_MODAL_PHONE, payload: testValue }))
      .toEqual({
        ...initialState,
        values: {
          ...initialState.values,
          phone: testValue
        }
      });
  });

  test('UPDATE_USER_MODAL_PICTURE', () => {
    expect(userModalReducer(initialState, { type: UPDATE_USER_MODAL_PICTURE, payload: testValue }))
      .toEqual({
        ...initialState,
        values: {
          ...initialState.values,
          picture: testValue
        }
      });
  });

  test('RESET_USER_MODAL_VALUES', () => {
    expect(userModalReducer(initialState, { type: RESET_USER_MODAL_VALUES }))
      .toEqual(initialState);
  });

  test('SHOW_USER_MODAL_ERROR', () => {
    expect(userModalReducer(initialState, { type: SHOW_USER_MODAL_ERROR }))
      .toEqual({
        ...initialState,
        values: {
          ...initialState.values
        },
        error: true
      });
  });

  test('HIDE_USER_MODAL_ERROR', () => {
    expect(userModalReducer(initialState, { type: HIDE_USER_MODAL_ERROR }))
      .toEqual({
        ...initialState,
        values: {
          ...initialState.values
        },
        error: false
      });
  });

  test('SHOW_USER_MODAL_LOADING', () => {
    expect(userModalReducer(initialState, { type: SHOW_USER_MODAL_LOADING }))
      .toEqual({
        ...initialState,
        values: {
          ...initialState.values
        },
        isLoading: true
      });
  });

  test('HIDE_USER_MODAL_LOADING', () => {
    expect(userModalReducer(initialState, { type: HIDE_USER_MODAL_LOADING }))
      .toEqual({
        ...initialState,
        values: {
          ...initialState.values
        },
        isLoading: false
      });
  });

  test('UNKNOWN ACTION', () => {
    expect(userModalReducer(initialState, { type: 'UNKNOWN' })).toEqual(initialState);
  });
});
