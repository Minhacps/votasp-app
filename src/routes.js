import React from 'react';
import { Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import Home from './Home/Home';
import Results from './Results/Results';
import ResultsWarning from './ResultsWarning/ResultsWarning';
import Questionario from './Questionario/Questionario';
import ComoFunciona from './components/ComoFunciona/ComoFunciona';

const Routes = () => (
  <React.Fragment>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/como-funciona" component={ComoFunciona} />
    <Route exact path="/app" component={Home} />
    <Route path="/app/questionario/:question" component={Questionario} />
    <Route exact path="/app/calculando-ranking" component={ResultsWarning} />
    <Route exact path="/app/ranking" component={Results} />
  </React.Fragment>
);

export default Routes;
