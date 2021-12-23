import { createUpdatedUserData } from '../../utils/userData';

describe('createUpdatedUserData', () => {
  test('should return new object with data', () => {
    expect(createUpdatedUserData({
      name: 'John Doe',
      gender: 'Женский',
      birthDate: '11.11.1999',
      registrationDate: '11.11.1999',
      email: 'test',
      tel: '55555'
    }))
      .toEqual({
        firstName: 'John',
        lastName: 'Doe',
        gender: 'female',
        dateOfBirth: '11.11.1999',
        registerDate: '11.11.1999',
        email: 'test',
        phone: '55555'
      });
  });
});
