import firebase from 'firebase/app';

export const saveAnswer = (answer, collection) => {
  const userId = firebase.auth().currentUser.uid;
  return firebase
    .firestore()
    .collection(collection)
    .doc(userId)
    .set(answer, { merge: true });
}

export const watchAnswers = (collection) => {
  const userId = firebase.auth().currentUser.uid;
  return firebase
    .firestore()
    .collection(collection)
    .doc(userId);
}

export const getCurrentUser = () => {
  const userId = firebase.auth().currentUser.uid;
  return firebase
    .firestore()
    .collection('users')
    .doc(userId)
    .get();
}
