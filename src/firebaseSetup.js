import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseSetup = () => {
  const config = {
    apiKey: 'AIzaSyBVclKJQrkvdVhj0gL4E5idZ1t0BBhbaXs',
    authDomain: 'vota-sp-dev.firebaseapp.com'
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
};

export default firebaseSetup;
