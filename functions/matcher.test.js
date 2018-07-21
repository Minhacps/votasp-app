const matcher = require('./matcher.js');

describe('matcher', () => {
  it('should give 100% match when all the answers match', () => {
    const voterAnswers = {1: "CP", 2: "C", 3: "D", 4: "DP"};
    const candidateAnswers = {1: "CP", 2: "C", 3: "D", 4: "DP"};

    const matchScore = matcher.getMatchScore(voterAnswers, candidateAnswers);

    expect(matchScore.normalized).toBe(10000)
  });

  it('should give 100% match when all the answers match and the voter did not answer all questions', () => {
    const voterAnswers = {1: "CP", 2: "C"};
    const candidateAnswers = {1: "CP", 2: "C", 3: "D", 4: "DP"};

    const matchScore = matcher.getMatchScore(voterAnswers, candidateAnswers);

    expect(matchScore.normalized).toBe(10000)
  });

  it('should give 0% match if all the answers are extreme oposites', () => {
    const voterAnswers = {1: "CP", 2: "DP", 3: "CP", 4: "DP"};
    const candidateAnswers = {1: "DP", 2: "CP", 3: "DP", 4: "CP"};

    const matchScore = matcher.getMatchScore(voterAnswers, candidateAnswers);

    expect(matchScore.normalized).toBe(0)
  });

  test.each`
    a       | b       | expectedScore
    ${'DP'} | ${'DP'} |  ${4}
    ${'DP'} |  ${'D'} |  ${2}
    ${'DP'} |  ${'C'} | ${-3}
    ${'DP'} | ${'CP'} | ${-4}
    ${'D'}  |  ${'D'} |  ${4}
    ${'D'}  |  ${'C'} | ${-2}
    ${'D'}  | ${'CP'} | ${-3}
    ${'C'}  |  ${'C'} |  ${4}
    ${'C'}  | ${'CP'} |  ${2}
    ${'CP'} | ${'CP'} |  ${4}
    ${'I'}  | ${'DP'} |  ${0}
    ${'I'}  |  ${'D'} |  ${0}
    ${'I'}  |  ${'I'} |  ${0}
    ${'I'}  |  ${'C'} |  ${0}
    ${'I'}  | ${'CP'} |  ${0}

  `('$a and $b give a score of $expectedScore', ({a, b, expectedScore}) => {
    expect(matcher.getMatchScore({1: a}, {1: b}).absolute).toBe(expectedScore);
    expect(matcher.getMatchScore({1: b}, {1: a}).absolute).toBe(expectedScore);
  });

});