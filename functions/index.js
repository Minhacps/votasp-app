const functions = require('firebase-functions');
const fs = require('fs');
const matcher = require('./matcher.js');

const cacheTimeoutMs = 60000
const numQuestions = 40;
const numCandidates = 4000;
const alternatives = [2, 1, -1, -2];
const sampleVoterAnswers = {
  1: 1,
  2: 1,
  3: 1,
  4: 1,
  5: 1,
  6: 1,
  7: 1,
  8: 1,
  9: 1,
  10: 1,
  11: 1,
  12: 1,
  13: 1,
  14: 1,
  15: 1,
  16: 1,
  17: 1,
  18: 1,
  19: 1,
  20: 1,
  21: 1,
  22: 1,
  23: 1,
  24: 1,
  25: 1,
  26: 1,
  27: 1,
  28: 1,
  29: 1,
  30: 1,
  31: 1,
  32: 1,
  33: 1,
  34: 1,
  35: 1,
  36: 1,
  37: 1,
  38: 1,
  39: 1,
  40: 1
};


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

exports.helloWorld = functions.https.onRequest((req, resp) => {
    const allCandidatesData = getCandidateAnswers();
    resp.send(JSON.stringify({
      lastCacheUpdate: lastFetch,
      cacheAge: new Date() - lastFetch,
      matchScores: getMatchScores(sampleVoterAnswers, allCandidatesData)
    }), null, 2);
});
