import firebase from 'firebase';

export const getTopMatches = firebase.functions().httpsCallable('getTopMatches');
