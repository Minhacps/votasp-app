const STORE_USER_DATA = 'votaSp/auth0/STORE_USER_DATA';

const initialState = {
  userData: {},
  isLoading: true
};

const auth0Reducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_USER_DATA:
      return {
        userData: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export const storeUserData = payload => ({ type: STORE_USER_DATA, payload });

export default auth0Reducer;
