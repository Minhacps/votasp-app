import auth0 from 'auth0-js';

import { AUTH_CONFIG } from './Auth0.variables';
import history from '../history';

export default class Auth {
  constructor () {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);

    this.auth0 = new auth0.WebAuth({
      domain: AUTH_CONFIG.domain,
      clientID: AUTH_CONFIG.clientId,
      redirectUri: AUTH_CONFIG.callbackUrl,
      audience: `https://${AUTH_CONFIG.domain}/userinfo`,
      responseType: 'token id_token',
      scope: 'openid'
    });
  }

  login () {
    this.auth0.authorize();
  }

  handleAuthentication () {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace('/');
      } else if (err) {
        history.replace('/');
        console.log(err);
        window.alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  setSession (authResult) {
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    window.localStorage.setItem('access_token', authResult.accessToken);
    window.localStorage.setItem('id_token', authResult.idToken);
    window.localStorage.setItem('expires_at', expiresAt);
    history.replace('/');
  }

  logout () {
    window.localStorage.removeItem('access_token');
    window.localStorage.removeItem('id_token');
    window.localStorage.removeItem('expires_at');
    history.replace('/');
  }

  isAuthenticated () {
    let expiresAt = JSON.parse(window.localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}
