const {task_1, task_2} = require('./index');

describe('task_1', () => {
  it('should compare two words in different cases', () => {
    expect(task_1('testValue, test')).toBeTruthy();
    expect(task_1('TestValue, value')).toBeTruthy();
    expect(task_1('TestValue, Other')).not.toBeTruthy();
    expect(task_1('name, title')).not.toBeTruthy();
  });

  it('should compare two words only separated by comma', () => {
    expect(task_1('testValue, test')).toBeTruthy();
    expect(task_1('TestValue value')).not.toBeTruthy();
    expect(task_1('TestValue Other')).not.toBeTruthy();
  });

  it('should return false if no value or one value', () => {
    expect(task_1('TestTestTest')).toBeFalsy();
    expect(task_1('')).toBeFalsy();
  })
});
