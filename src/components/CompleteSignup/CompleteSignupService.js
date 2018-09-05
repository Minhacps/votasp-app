import firebase from 'firebase/app';

export const saveUser = (collection, userData) => {
  const currentUser = firebase.auth().currentUser;

  firebase
    .firestore()
    .collection(collection)
    .doc(currentUser.uid)
    .set({ ...userData, email: currentUser.email });
};

export const getCandidateTseData = async candidateNumber => {
  const querySnapshot = await firebase
    .firestore()
    .collection('candidates_pictures')
    .where('number', '==', Number(candidateNumber))
    .limit(1)
    .get();

  let candidateData = {};

  querySnapshot.forEach(doc => {
    candidateData = { ...doc.data() };
  });

  return candidateData;
};
