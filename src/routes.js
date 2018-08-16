import React from 'react';
import { Route } from 'react-router-dom';

import Authentication from './components/Authentication/Authentication';

import LandingPage from './pages/LandingPage/LandingPage';
import Home from './Home/Home';
import Results from './Results/Results';
import ResultsWarning from './ResultsWarning/ResultsWarning';
import Questionario from './Questionario/Questionario';
import ComoFunciona from './components/ComoFunciona/ComoFunciona';

const RenderAuthenticated = Coponent => (
  <Authentication>{({ isUserAuthenticated }) => isUserAuthenticated && <Home />}</Authentication>
);

const Routes = () => (
  <React.Fragment>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/como-funciona" component={ComoFunciona} />
    <Route exact path="/app" render={() => RenderAuthenticated(Home)} />
    <Route path="/app/questionario/:question" render={() => RenderAuthenticated(Questionario)} />
    <Route
      exact
      path="/app/calculando-ranking"
      render={() => RenderAuthenticated(ResultsWarning)}
    />
    <Route exact path="/app/ranking" render={() => RenderAuthenticated(Results)} />
  </React.Fragment>
);

export default Routes;
