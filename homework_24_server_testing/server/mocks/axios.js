const MockAdapter = require('axios-mock-adapter');
const { dummyApi } = require('../src/api/dummyApi');

const mock = new MockAdapter(dummyApi);

module.exports =  { mock };
