import { combineReducers } from 'redux';

import perguntas from './modules/perguntas';
import questionario from './modules/questionario';

export default combineReducers({
  perguntas,
  questionario
});
