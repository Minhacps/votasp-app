const matcher = require('./matcher.js');

describe('matcher', () => {
  it('should give 100% match if all the answers match', () => {
    const voterAnswers = {1: "CP", 2: "C", 3: "D", 4: "DP"};
    const candidateAnswers = {1: "CP", 2: "C", 3: "D", 4: "DP"};

    const matchScore = matcher.getMatchScore(voterAnswers, candidateAnswers);

    expect(matchScore).toBe(10000)
  });

  it('should give 0% match if all the answers are extreme oposites', () => {
    const voterAnswers = {1: "CP", 2: "DP", 3: "CP", 4: "DP"};
    const candidateAnswers = {1: "DP", 2: "CP", 3: "DP", 4: "CP"};

    const matchScore = matcher.getMatchScore(voterAnswers, candidateAnswers);

    expect(matchScore).toBe(0)
  });
});