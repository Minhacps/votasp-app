import React from 'react';
import { Route } from 'react-router-dom';

import Home from './Home/Home';
import Results from './Results/Results';
import ResultsWarning from './ResultsWarning/ResultsWarning';
import Questionario from './Questionario/Questionario';
import ComoFunciona from './components/ComoFunciona/ComoFunciona';

const Routes = () => (
  <React.Fragment>
    <Route exact path="/" component={Home} />
    <Route exact path="/como-funciona" component={ComoFunciona} />
    <Route exact path="/questionario" component={Questionario} />
    <Route exact path="/calculando-ranking" component={ResultsWarning} />
    <Route exact path="/ranking" component={Results} />
  </React.Fragment>
);

export default Routes;
