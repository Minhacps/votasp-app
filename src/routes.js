import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import ComoFunciona from './components/ComoFunciona/ComoFunciona';
import CompleteSignup from './pages/CompleteSignup/CompleteSignup';

import Home from './Home/Home';
import Questionario from './Questionario/Questionario';
import history from './history';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/como-funciona" component={ComoFunciona} />
      <Route exact path="/completar-cadastro" component={CompleteSignup} />
      <Route exact path="/questionario" component={Questionario} />
    </Switch>
  </Router>
);

export default Routes;
