import firebase from 'firebase/app';

export const getTopMatches = firebase.functions().httpsCallable('getTopMatches');
