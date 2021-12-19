import { getGenderFieldValue, getTitleValue } from '../../utils/getValues';

describe('getGenderFieldValue', () => {
  test('should return Мужской', () => {
    expect(getGenderFieldValue('male')).toBe('Мужской');
  });

  test('should return Male', () => {
    expect(getGenderFieldValue('male', 'en')).toBe('Male');
  });
});

describe('getTitleValue', () => {
  test('should return г-жа', () => {
    expect(getTitleValue('mrs')).toBe('г-жа');
  });

  test('should return ', () => {
    expect(getTitleValue('mrs', 'en')).toBe('mrs.');
  });
});
