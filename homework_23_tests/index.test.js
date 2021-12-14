const {task_1, task_2, task_3, task_4} = require('./index');

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
});

describe('task_3', () => {
  it('should return date from dd/mm/yyyy hh-mm as dd.mm.yyyy hh:mm', () => {
    expect(task_3('12/02/2021 12-00')).toBe('12.02.2021 12:00');
    expect(task_3('22/11/1985 12-00')).toBe('22.11.1985 12:00');
  })

  it('should return false if value not in format dd/mm/yyyy hh-mm', () => {
    expect(task_3('12/02/2021')).toBeFalsy();
    expect(task_3('12-00')).toBeFalsy();
    expect(task_3('45890')).toBeFalsy();
  })
});


describe('task_4', () => {
  it('should return true if correct value', () => {
    expect(task_4('иванов иван иванович')).toBeTruthy();
    expect(task_4('Иванов Иван Иванович')).toBeTruthy();
    expect(task_4('Иванов иван иванович')).toBeTruthy();
    expect(task_4('иванов иван')).toBeTruthy();
  });

  it('should return fasle if incorrect value', () => {
    expect(task_4('Иван Иван Иван')).toBeFalsy();
    expect(task_4('12345')).toBeFalsy();
  })
})