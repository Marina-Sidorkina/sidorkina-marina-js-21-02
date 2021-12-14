const {task_1, task_2, task_3, task_4, task_5, task_6} = require('./index');

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
  });
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
  });

  it('should return false if no value or one value', () => {
    expect(task_2('TestTestTest')).toBeFalsy();
    expect(task_2('')).toBeFalsy();
  });
});

describe('task_3', () => {
  it('should return date from dd/mm/yyyy hh-mm as dd.mm.yyyy hh:mm', () => {
    expect(task_3('12/02/2021 12-00')).toBe('12.02.2021 12:00');
    expect(task_3('22/11/1985 12-00')).toBe('22.11.1985 12:00');
  });

  it('should return false if value not in format dd/mm/yyyy hh-mm', () => {
    expect(task_3('12/02/2021')).toBeFalsy();
    expect(task_3('12-00')).toBeFalsy();
    expect(task_3('45890')).toBeFalsy();
  });
});


describe('task_4', () => {
  it('should return true if correct value', () => {
    expect(task_4('иванов иван иванович')).toBeTruthy();
    expect(task_4('Иванов Иван Иванович')).toBeTruthy();
    expect(task_4('Иванов иван иванович')).toBeTruthy();
    expect(task_4('иванов иван')).toBeTruthy();
  });

  it('should return false if incorrect value', () => {
    expect(task_4('Иван Иван Иван')).toBeFalsy();
    expect(task_4('12345')).toBeFalsy();
  });
});

describe('task_5', () => {
  it('should return true if correct value', () => {
    expect(task_5('ValueValueValue')).toBe('value_value_value');
    expect(task_5('TestTest')).toBe('test_test');
  });

  it('should return false if incorrect value', () => {
    expect(task_4('Value Value Value')).toBeFalsy();
    expect(task_4('12345')).toBeFalsy();
    expect(task_4('valuevalue')).toBeFalsy();
  });
});

const test1 = `value value
               <!-- Comment --> value
               value value`;

const test2 = `
               <!-- Comment --> value
               `;

const test3= `value value
                   value
               value value`

describe('task_6', () => {
  it('should return array of html comments', () => {
    expect(task_6(test1)).toStrictEqual(['<!-- Comment -->']);
    expect(task_6(test2)).toStrictEqual(['<!-- Comment -->']);
  });

  it('should return Комментарии не найдены... if no comments', () => {
    expect(task_6(test3)).toBe("Комментарии не найдены...");
  });

  it('should return false if no value', () => {
    expect(task_6('')).toBeFalsy();
  });
});