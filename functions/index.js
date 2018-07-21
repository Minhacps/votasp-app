const functions = require('firebase-functions');
const fs = require('fs');
const matcher = require('./matcher.js');

const cacheTimeoutMs = 60000
const numQuestions = 40;
const numCandidates = 4000;
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

const fetchCandidateAnswers = () => {
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
        matchScore: matcher.getMatchScore(voterAnswers, candidateData.answers)
      }
    })
    .sort((a, b) => b.matchScore - a.matchScore);
}

exports.getTopMatches = functions.https.onCall((voterAnswers, context) => {
    const allCandidatesData = getCandidateAnswers();

    return getMatchScores(voterAnswers, allCandidatesData).slice(0,100);
});
