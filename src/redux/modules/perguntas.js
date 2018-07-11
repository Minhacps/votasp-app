const STORE_PERGUNTAS = 'votaSp/perguntas/STORE_PERGUNTAS';

const initialState = [];

const perguntasReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_PERGUNTAS:
      return action.payload;
    default:
      return state;
  }
};

export const storePerguntas = payload => ({ type: STORE_PERGUNTAS, payload });

export default perguntasReducer;
