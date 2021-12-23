const parseDate = require('../../src/utils/parseDate');

describe('getValue', () => {
  it('should return object with date values', () => {
    expect(parseDate('1956-04-15T00:10:35.555Z')).toEqual({
      enDate: "15 of April 1956",
      ruDate: "15 Апреля 1956 года",
      enDateAndTime: "15 of April 03:10",
      ruDateAndTime:"15 Апреля 03:10"
    });
    expect(parseDate('1985-07-29T00:10:35.555Z')).toEqual({
      enDate: "29 of July 1985",
      ruDate: "29 Июля 1985 года",
      enDateAndTime: "29 of July 04:10",
      ruDateAndTime:"29 Июля 04:10"
    });
  });

  it('should return object with empty fields', () => {
    expect(parseDate('')).toEqual({
      enDate: '',
      ruDate: '',
      enDateAndTime: '',
      ruDateAndTime: ''
    });
    expect(parseDate(null)).toEqual({
      enDate: '',
      ruDate: '',
      enDateAndTime: '',
      ruDateAndTime: ''
    });
    expect(parseDate(undefined)).toEqual({
      enDate: '',
      ruDate: '',
      enDateAndTime: '',
      ruDateAndTime: ''
    });
    expect(parseDate(10)).toEqual({
      enDate: '',
      ruDate: '',
      enDateAndTime: '',
      ruDateAndTime: ''
    });
  });
});
