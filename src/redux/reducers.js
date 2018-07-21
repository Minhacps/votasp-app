import { combineReducers } from 'redux';

import auth0 from './modules/auth0';
import perguntas from './modules/perguntas';
import questionario from './modules/questionario';

export default combineReducers({
  auth0,
  perguntas,
  questionario,
});
