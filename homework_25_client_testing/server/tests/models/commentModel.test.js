const model = require('../../src/models/commentModel');
const post = require('../../mocks/post');

const DATUM = post.postCommentMockData;

const RESULT = post.postCommentProcessedMockData;

describe('Comment Model', () => {
  it('parseDatum should return only necessary processed fields', () => {
    expect(model.parseDatum(DATUM)).toEqual(RESULT);
  });

  it('parseData should return array of objects with only necessary processed fields', () => {
    expect(model.parseData({ data: [DATUM, DATUM], page: 0, limit: 5, total: 100 }))
      .toEqual({ data: [RESULT, RESULT], page: 0, limit: 5, total: 100 });
  })
});
