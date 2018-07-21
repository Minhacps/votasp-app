const voterToCandidateScoringTable = {
    DP: { DP:  4, D:  2, I: 0, C: -3, CP: -4},
    D:  { DP:  2, D:  4, I: 0, C: -2, CP: -3},
    I:  { DP:  0, D:  0, I: 0, C:  0, CP:  0},
    C:  { DP: -3, D: -2, I: 0, C:  4, CP:  2},
    CP: { DP: -4, D: -3, I: 0, C:  2, CP:  4},
};


exports.getMatchScore = (voterAnswers, candidateAnswers) => {
    const voterAnsweredQuestionsIds =  Object.keys(voterAnswers);
    const score = voterAnsweredQuestionsIds.reduce((score, questionId) => {
        const voterAnswer = voterAnswers[questionId];
        const candidateAnswer = candidateAnswers[questionId];

        return score + voterToCandidateScoringTable[voterAnswer][candidateAnswer];
    }, 0);
    return normalize(score, voterAnsweredQuestionsIds.length);
}

const normalize = (score, questionsAnsweredByVoter) => {
    const max = voterToCandidateScoringTable.CP.CP * questionsAnsweredByVoter;
    const min = voterToCandidateScoringTable.CP.DP * questionsAnsweredByVoter;

    return Math.round(((score - min) / (max-min)) * 10000);
};