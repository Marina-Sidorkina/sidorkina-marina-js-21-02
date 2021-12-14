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


describe('task_2', () => {
  it('should return false if not a string and a number', () => {
    expect(task_2('testTest, test')).toBeFalsy();
    expect(task_2('testTest, value')).toBeFalsy();
    expect(task_2('3, value')).toBeFalsy();
  });

  it('should return shortened string', () => {
    expect(task_2('TestTestTest, 3')).toBe("Tes...");
    expect(task_2('valueSomeString, 5')).toBe("value...");
  })

  it('should return false if no value or one value', () => {
    expect(task_2('TestTestTest')).toBeFalsy();
    expect(task_2('')).toBeFalsy();
  })
})