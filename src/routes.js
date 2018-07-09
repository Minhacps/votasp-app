import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import Header from './components/Header/Header';
import ComoFunciona from './components/ComoFunciona/ComoFunciona';
import CompleteSignup from './pages/CompleteSignup/CompleteSignup';

import Auth0 from './Auth0/Auth0';
import Auth0Callback from './Auth0/Auth0.callback';
import renderAuthenticated from './Auth0/renderAuthenticated';
import Home from './Home/Home';
import Results from './Results/Results';
import history from './history';

const auth = new Auth0();
auth.getUserInfo();

const Routes = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" render={props => renderAuthenticated(Home, props)} />
        <Route exact path="/como-funciona" component={ComoFunciona} />
        <Route exact path="/completar-cadastro" component={CompleteSignup} />
        <Route exact path='/results' render={props => <Results {...props} />} />
        <Route
          exact
          path="/login/callback"
          render={props => <Auth0Callback auth={auth} {...props} />}
        />
      </Switch>
    </Router>
  </Provider>
);

export default Routes;
