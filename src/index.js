import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import firebaseSetup from './firebaseSetup';
import './styles/index.css';

firebaseSetup();
ReactDOM.render(<App />, document.getElementById('root'));
