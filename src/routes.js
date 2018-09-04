import React from 'react';
import { Route } from 'react-router-dom';

import Authentication from './components/Authentication/Authentication';

import LandingPage from './pages/LandingPage/LandingPage';
import Home from './Home/Home';
import Ranking from './Ranking/Ranking';
import QuestionarioFinalizado from './QuestionarioFinalizado/QuestionarioFinalizado';
import Questionario from './Questionario/Questionario';
import ComoFunciona from './components/ComoFunciona/ComoFunciona';
import Perfil from './Perfil/Perfil';
import RedefinePassword from './components/RedefinePassword/RedefinePassword';

const RenderAuthenticated = (Component, props) => (
  <Authentication>
    {({ isUserAuthenticated }) => isUserAuthenticated && <Component {...props} />}
  </Authentication>
);

const Routes = () => (
  <React.Fragment>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/como-funciona" component={ComoFunciona} />
    <Route exact path="/app/redefinepassword" component={RedefinePassword} />
    <Route exact path="/questionario-finalizado" component={QuestionarioFinalizado} />
    <Route exact path="/app" render={props => RenderAuthenticated(Home, props)} />
    <Route
      path="/app/questionario/:question"
      render={props => RenderAuthenticated(Questionario, props)}
    />
    <Route
      exact
      path="/app/ranking"
      render={props => RenderAuthenticated(Ranking, props)}
    />
    <Route
      exact
      path="/app/atualizar-informacoes"
      render={props => RenderAuthenticated(Perfil, props)}
    />
  </React.Fragment>
);

export default Routes;
