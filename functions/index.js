const functions = require('firebase-functions');
const getTopMatches = require('./getTopMatches.js');
const updateSnapshot = require('./updateSnapshot.js');
const admin = require('firebase-admin');
admin.initializeApp();

exports.getTopMatches = functions.https.onCall(getTopMatches(admin));

exports.updateSnapshot = functions.https.onRequest(updateSnapshot(admin));
