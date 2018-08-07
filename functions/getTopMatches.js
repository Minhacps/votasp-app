const functions = require('firebase-functions');
const matcher = require('./matcher.js');

const cacheTimeoutMs = 5 * 60 * 1000;
const alternatives = ["CP", "C", "D", "DP"];

let lastFetch = -1;

let candidateData = {
  answers: [],
  isUpToDate: () => {
    return lastFetch === -1 ? false : new Date() - lastFetch < cacheTimeoutMs;
  }
};

const getCandidateAnswers = () => {
  if (candidateData.isUpToDate()) {
    return candidateData.answers;
  }
  candidateData.answers = fetchCandidateAnswers();
  lastFetch = new Date();
  return candidateData.answers;
};

// TODO: replace by fetch on firestore
const fetchCandidateAnswers = () => {
  const numQuestions = 40;
  const numCandidates = 4000;
  return Array(numCandidates).fill(1).map( (v, i) => {
    return {
      id: 'candidate-'+i,
      answers: Array(numQuestions).fill(1).reduce((answers, vv, j) => {
        answers[j] = alternatives[Math.floor(Math.random() * alternatives.length)];
        return answers;
      }, {})
    }
  });
};

const getMatchScores = (voterAnswers, allCandidatesData) => {
  return allCandidatesData
    .map((candidateData) => {
      return {
        candidateId: candidateData.id,
        matchScore: matcher.getMatchScore(voterAnswers, candidateData.answers).normalized
      }
    })
    .sort((a, b) => b.matchScore - a.matchScore);
};

const getTopMatches = (voterAnswers, context) => {
    if (!context.auth) {
      throw new functions.https.HttpsError('unauthenticated', 'You must be logged in to call this function.');
    }

    const allCandidatesData = getCandidateAnswers();

    return getMatchScores(voterAnswers, allCandidatesData).slice(0,100);
};

module.exports = getTopMatches;
