const STORE_USER_DATA = 'votaSp/auth0/STORE_USER_DATA';

const initialState = {
  userData: {},
  isLoading: true
};

const auth0Reducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_USER_DATA: {
      const rawMetaData = 'https://votasp.org.br/user_metadata';
      const metaData = { ...action.payload[rawMetaData] };
      const userData = { ...action.payload };
      delete userData[rawMetaData];

      return {
        userData,
        metaData,
        isLoading: false
      };
    }
    default:
      return state;
  }
};

export const storeUserData = payload => ({ type: STORE_USER_DATA, payload });

export default auth0Reducer;
