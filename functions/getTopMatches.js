const functions = require('firebase-functions');
const matcher = require('./matcher.js');

const cacheTimeoutMs = 15 * 60 * 1000
const validAnswers = ['CP', 'C', 'I', 'D', 'DP']

let lastFetch = -1;

let candidateData = {
  answers: [],
  isUpToDate: () => {
    return lastFetch === -1 ? false : new Date() - lastFetch < cacheTimeoutMs;
  }
};

const getCandidateAnswers = (admin) => {
  if (candidateData.isUpToDate()) {
    return new Promise(
      (resolve, reject) => resolve(candidateData.answers)
    );
  }
  candidateData.answers = fetchCandidateAnswers(admin);
  lastFetch = new Date();
  return candidateData.answers;
};

const fetchCandidateAnswers = (admin) => {
  const candidateAnswersCollection = admin.firestore().collection('candidate_answers');
  const numQuestions = 40;

  return candidateAnswersCollection.where('40', '>', '').get().then(querySnapshot => querySnapshot.docs)
};

const getMatchScores = (voterAnswers, allCandidatesData) => {
  return allCandidatesData
    .filter((candidateData) => {
      amountOfAnswers = Object.keys(candidateData.data()).length
      return amountOfAnswers === 40
    }).map((candidateData) => {
      const score = matcher.getMatchScore(voterAnswers, candidateData.data()).normalized;

      return {
        candidateId: candidateData.id,
        matchScore: score
      }
    })
    .sort((a, b) => b.matchScore - a.matchScore);
}

const getTopMatches = (admin) => {
  return (voterAnswers, context) => {
    if (!context.auth) {
      throw new functions.https.HttpsError('unauthenticated', 'You must be logged in to call this function.');
    }

    const answeredQuestionsCount = Object.keys(voterAnswers).reduce((count, idx) => {

      if (!(idx >= 1 && idx <= 40)) {
        throw new functions.https.HttpsError('invalid-argument', 'The answers must be indexed from 1 to 40.');
      }

      const answer = voterAnswers[idx];

      if (!validAnswers.includes(answer)) {
        throw new functions.https.HttpsError('invalid-argument', 'The answers must be one of: ' + validAnswers.join(' ')+'.');
      }

      return  answer === 'I' ? count : count + 1
    }, 0)

    return getCandidateAnswers().then(allCandidatesData => {
      return getMatchScores(voterAnswers, allCandidatesData).slice(0,100);
    });
  }
};

module.exports = getTopMatches;
