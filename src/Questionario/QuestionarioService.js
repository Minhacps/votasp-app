import firebase from 'firebase/app';

export const saveAnswer = (answer) => {
  const userId = firebase.auth().currentUser.uid;
  return firebase
    .firestore()
    .collection('answers')
    .doc(userId)
    .set(answer, { merge: true });
}

export const watchAnswers = () => {
  const userId = firebase.auth().currentUser.uid;
  return firebase
    .firestore()
    .collection('answers')
    .doc(userId);
}

