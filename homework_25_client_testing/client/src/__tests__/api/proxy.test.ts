import { mock } from '../../../mocks/proxy';
import * as api from '../../api/proxy/index';

const success = 200;
const error = 400;
const testValue = 'value';
const message = 'Request failed with status code 400';
const user = {
  dateOfBirth: testValue,
  email: testValue,
  firstName: testValue,
  gender: testValue,
  lastName: testValue,
  location: {
    city: testValue,
    country: testValue,
  },
  phone: testValue,
  picture: testValue,
  title: testValue
};

describe('proxy api test', () => {
  test('getPostInfo success', (done) => {
    mock.onGet(/\/post\/\w+/)
      .replyOnce(success, JSON.stringify({ value: testValue }));

    const result = api.getPostInfo(testValue);

    expect(result).toEqual(expect.any(Promise));

    result.then((response) => {
      expect(response.data).toEqual({ value: testValue });
      done();
    });
  });

  test('getPostInfo error', (done) => {
    mock.onGet(/\/post\/\w+/)
      .replyOnce(error);

    const result = api.getPostInfo(testValue);

    expect(result).toEqual(expect.any(Promise));

    result.catch((err) => {
      expect(err.message).toEqual(message);
      done();
    });
  });

  test('updateUser success', (done) => {
    mock.onPut(/\/user\/\w+/)
      .replyOnce(success, JSON.stringify({ value: testValue }));

    const result = api.updateUser({ value: testValue }, testValue);

    expect(result).toEqual(expect.any(Promise));

    result.then((response) => {
      expect(response.data).toEqual({ value: testValue });
      done();
    });
  });

  test('updateUser error', (done) => {
    mock.onPut(/\/user\/\w+/)
      .replyOnce(error);

    const result = api.updateUser({ value: testValue }, testValue);

    expect(result).toEqual(expect.any(Promise));

    result.catch((err) => {
      expect(err.message).toEqual(message);
      done();
    });
  });

  test('addAndShowNewUser success', (done) => {
    mock.onPost('user/create')
      .replyOnce(success, JSON.stringify({ value: testValue }));

    const result = api.addAndShowNewUser(user);

    expect(result).toEqual(expect.any(Promise));

    result.then((response) => {
      expect(response.data).toEqual({ value: testValue });
      done();
    });
  });

  test('addAndShowNewUser error', (done) => {
    mock.onPost('user/create')
      .replyOnce(error);

    const result = api.addAndShowNewUser(user);

    expect(result).toEqual(expect.any(Promise));

    result.catch((err) => {
      expect(err.message).toEqual(message);
      done();
    });
  });
});
