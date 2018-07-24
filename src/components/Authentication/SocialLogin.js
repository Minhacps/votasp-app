import React, { Component } from 'react';
import firebase from 'firebase/app';

import FacebookLoginButton from 'react-social-login-buttons/lib/buttons/FacebookLoginButton';
import GoogleLoginButton from 'react-social-login-buttons/lib/buttons/GoogleLoginButton';
import TwitterLoginButton from 'react-social-login-buttons/lib/buttons/TwitterLoginButton';
import { throws } from 'assert';

const buttonStyle = {
  fontSize: '12px',
  textTransform: 'uppercase',
  marginRight: 0,
  marginLeft: 0,
  boxShadow: 'none',
  height: 40
};

export default class SocialLogin extends Component {
  loginWithFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('email');

    this.signInWithPopup(provider);
  };

  loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    this.signInWithPopup(provider);
  };

  loginWithTwitter = () => {
    const provider = new firebase.auth.TwitterAuthProvider();

    this.signInWithPopup(provider);
  };

  signInWithPopup = provider => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(async userCredential => {
        const { uid, displayName, email } = userCredential.user;

        const doc = firebase
          .firestore()
          .collection('users')
          .doc(uid);
        const snap = await doc.get();

        if (snap.exists) {
          return;
        }

        await doc.set({ name: displayName, email });
      })
      .catch(this.handleSocialLoginError);
  };

  handleSocialLoginError = error => {
    switch (error.code) {
      // Account exists with different credentials. For now we just throw an error.
      case 'auth/account-exists-with-different-credential':
        return console.error(
          'Esta conta já foi conectada usando outra rede social. Tente novamente usando outro método de login.'
        );

      // Popup blocked or closed
      case 'auth/popup-blocked':
      case 'auth/popup-closed-by-user':
        return console.error('O popup de autorização foi bloqueado ou fechado, tente novamente.');

      // Fail silently
      case 'auth/cancelled-popup-request':
        return;

      // Unexpected
      case 'auth/unauthorized-domain':
      case 'auth/operation-not-supported-in-this-environment':
      case 'auth/operation-not-allowed':
      case 'auth/auth-domain-config-required':
      default:
        throw error;
    }
  };

  render() {
    return (
      <div>
        <FacebookLoginButton
          text="Entrar com facebook"
          style={buttonStyle}
          onClick={this.loginWithFacebook}
        />
        <GoogleLoginButton
          text="Entrar com google"
          style={buttonStyle}
          onClick={this.loginWithGoogle}
        />
        <TwitterLoginButton
          text="Entrar com twitter"
          style={buttonStyle}
          onClick={this.loginWithTwitter}
        />
      </div>
    );
  }
}
