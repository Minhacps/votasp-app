import firebase from 'firebase/app';
import 'firebase/auth';

import currentEnv from './env';

const firebaseSetup = () => {
  const config = {
    apiKey: currentEnv.firebase.apiKey,
    authDomain: currentEnv.firebase.authDomain,
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
};

export default firebaseSetup;
