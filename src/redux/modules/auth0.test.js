import auth0Reducer, { storeUserData } from './auth0';

describe('auth0Reducer', () => {
  it('should replace the metadata attribute', () => {
    const payload = {
      name: 'User name',
      sub: 'auth0|5123',
      'https://votasp.org.br/user_metadata': {
        city: 'Foo city'
      }
    };

    const expectedState = {
      isLoading: false,
      userData: {
        name: 'User name',
        sub: 'auth0|5123'
      },
      metaData: {
        city: 'Foo city'
      }
    };

    const reducerState = auth0Reducer(null, storeUserData(payload));
    expect(reducerState).toEqual(expectedState);
  });
});
