import firebase from 'firebase/app';

export const saveAnswer = () => {
  const userId = firebase.auth().currentUser.uid;
  return firebase
    .firestore()
    .collection('answers')
    .doc(userId)
    .set(answer, { merge: true });
}
