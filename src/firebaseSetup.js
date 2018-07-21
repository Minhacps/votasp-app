import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import currentEnv from './env';

const firebaseSetup = () => {
    const config = {
        apiKey: currentEnv.firebase.apiKey,
        authDomain: currentEnv.firebase.authDomain,
        projectId: currentEnv.firebase.projectId
    };

    if (!firebase.apps.length) {
        firebase.initializeApp(config);
        firebase.firestore().settings({ timestampsInSnapshots: true });
        firebase.firestore().enablePersistence();
    }
};

export default firebaseSetup;
