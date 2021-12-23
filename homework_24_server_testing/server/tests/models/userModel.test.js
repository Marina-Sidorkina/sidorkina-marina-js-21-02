const model = require('../../src/models/userModel');
const user = require('../../mocks/user');

const datum = user.userMockData;
const result = user.userProcessedMockData;

describe('User Model', () => {
  it('parseDatum should return only necessary processed fields', () => {
    expect(model.parseDatum(datum)).toEqual(result);
  })
});
