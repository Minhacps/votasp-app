const getTopMatches = require('./getTopMatches.js');

describe('getTopMatches', () => {
  it('should throw unauthenticated error for unauthenticated requests', () => {
    expect(() => getTopMatches({},{auth: false})).toThrow('You must be logged in to call this function.')
  });
});