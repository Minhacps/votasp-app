const STORE_QUESTIONARIO = 'votaSp/questionario/STORE_QUESTIONARIO';

const initialState = [];

const questionarioReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_QUESTIONARIO:
      return action.payload;
    default:
      return state;
  }
};

export const storeQuestionario = payload => ({ type: STORE_QUESTIONARIO, payload });

export default questionarioReducer;
