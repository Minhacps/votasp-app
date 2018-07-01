import auth0 from 'auth0-js';

import env from '../env';
import history from '../history';
import store from '../redux/store';
import { storeUserData } from '../redux/modules/auth0';

export default class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: env.auth0.domain,
      clientID: env.auth0.clientId,
      redirectUri: env.auth0.callbackUrl,
      audience: `https://${env.auth0.originalDomain}/userinfo`,
      responseType: 'token id_token',
      scope: 'openid profile user_metadata'
    });
  }

  login = () => {
    this.auth0.authorize();
  };

  handleAuthentication = () => {
    this.auth0.parseHash((error, authResult) => {
      if (error) {
        console.error(error);
        return;
      }

      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace('/');
      }
    });
  };

  setSession = authResult => {
    console.log(authResult);
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );

    window.localStorage.setItem('access_token', authResult.accessToken);
    window.localStorage.setItem('id_token', authResult.idToken);
    window.localStorage.setItem('expires_at', expiresAt);

    this.getUserInfo();

    history.replace('/');
  };

  logout = () => {
    window.localStorage.removeItem('access_token');
    window.localStorage.removeItem('id_token');
    window.localStorage.removeItem('expires_at');
    history.replace('/');
  };

  isAuthenticated = () => {
    let expiresAt = JSON.parse(window.localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  };

  getUserInfo = () => {
    const idToken = window.localStorage.getItem('id_token');
    const accessToken = window.localStorage.getItem('access_token');

    if (!accessToken) {
      return;
    }

    const auth0Manage = new auth0.Management({
      domain: env.auth0.domain,
      token: idToken
    });

    this.auth0.client.userInfo(accessToken, (error, userData) => {
      if (error) {
        throw error;
      }

      auth0Manage.getUser(userData.sub, console.log);

      store.dispatch(storeUserData(userData));
    });
  };
}
