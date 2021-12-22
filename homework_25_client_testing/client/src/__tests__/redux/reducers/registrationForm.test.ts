import registrationFormReducer from '../../../redux/reducers/registrationForm';
import {
  HIDE_REGISTRATION_ERROR, HIDE_REGISTRATION_LOADING,
  RESET_REGISTRATION_VALUES, SHOW_REGISTRATION_ERROR, SHOW_REGISTRATION_LOADING,
  UPDATE_REGISTRATION_DATE_OF_BIRTH,
  UPDATE_REGISTRATION_EMAIL,
  UPDATE_REGISTRATION_GENDER,
  UPDATE_REGISTRATION_NAME, UPDATE_REGISTRATION_PHONE
} from '../../../redux/constants/registrationForm';

const initialState = {
  values: {
    name: '',
    email: '',
    gender: '',
    dateOfBirth: '',
    phone: '',
  },
  error: false,
  isLoading: false
};

const testValue = 'value';

describe('registrationFormReducer test', () => {
  test('UPDATE_REGISTRATION_NAME', () => {
    expect(registrationFormReducer(initialState, { type: UPDATE_REGISTRATION_NAME, payload: testValue }))
      .toEqual({
        ...initialState,
        values: {
          ...initialState.values,
          name: testValue
        }
      });
  });

  test('UPDATE_REGISTRATION_EMAIL', () => {
    expect(registrationFormReducer(initialState, { type: UPDATE_REGISTRATION_EMAIL, payload: testValue }))
      .toEqual({
        ...initialState,
        values: {
          ...initialState.values,
          email: testValue
        }
      });
  });

  test('UPDATE_REGISTRATION_DATE_OF_BIRTH', () => {
    expect(registrationFormReducer(initialState, { type: UPDATE_REGISTRATION_DATE_OF_BIRTH, payload: testValue }))
      .toEqual({
        ...initialState,
        values: {
          ...initialState.values,
          dateOfBirth: testValue
        }
      });
  });

  test('RESET_REGISTRATION_VALUES', () => {
    expect(registrationFormReducer(initialState, { type: RESET_REGISTRATION_VALUES, payload: testValue }))
      .toEqual(initialState);
  });

  test('UPDATE_REGISTRATION_PHONE', () => {
    expect(registrationFormReducer(initialState, { type: UPDATE_REGISTRATION_PHONE, payload: testValue }))
      .toEqual({
        ...initialState,
        values: {
          ...initialState.values,
          phone: testValue
        }
      });
  });

  test('UPDATE_REGISTRATION_GENDER', () => {
    expect(registrationFormReducer(initialState, { type: UPDATE_REGISTRATION_GENDER, payload: testValue }))
      .toEqual({
        ...initialState,
        values: {
          ...initialState.values,
          gender: testValue
        }
      });
  });

  test('SHOW_REGISTRATION_ERROR', () => {
    expect(registrationFormReducer(initialState, { type: SHOW_REGISTRATION_ERROR }))
      .toEqual({
        ...initialState,
        values: {
          ...initialState.values
        },
        error: true
      });
  });

  test('HIDE_REGISTRATION_ERROR', () => {
    expect(registrationFormReducer(initialState, { type: HIDE_REGISTRATION_ERROR }))
      .toEqual({
        ...initialState,
        values: {
          ...initialState.values
        },
        error: false
      });
  });

  test('SHOW_REGISTRATION_LOADING', () => {
    expect(registrationFormReducer(initialState, { type: SHOW_REGISTRATION_LOADING }))
      .toEqual({
        ...initialState,
        values: {
          ...initialState.values
        },
        error: false,
        isLoading: true
      });
  });

  test('HIDE_REGISTRATION_LOADING', () => {
    expect(registrationFormReducer(initialState, { type: HIDE_REGISTRATION_LOADING }))
      .toEqual({
        ...initialState,
        values: {
          ...initialState.values
        },
        isLoading: false
      });
  });

  test('UNKNOWN ACTION', () => {
    expect(registrationFormReducer(initialState, { type: 'UNKNOWN' })).toEqual(initialState);
  });
});
