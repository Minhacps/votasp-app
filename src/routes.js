import React from 'react';
import { Route } from 'react-router-dom';

import Home from './Home/Home';
import Ranking from './Ranking/Ranking';
import ResultsWarning from './ResultsWarning/ResultsWarning';
import Questionario from './Questionario/Questionario';
import ComoFunciona from './components/ComoFunciona/ComoFunciona';
import Perfil from './Perfil/Perfil';

const Routes = () => (
  <React.Fragment>
    <Route exact path="/" component={Home} />
    <Route exact path="/como-funciona" component={ComoFunciona} />
    <Route path="/questionario/:question" component={Questionario} />
    <Route exact path="/calculando-ranking" component={ResultsWarning} />
    <Route exact path="/ranking" component={Ranking} />
    <Route exact path="/atualizar-informacoes" component={Perfil} />
  </React.Fragment>
);

export default Routes;
