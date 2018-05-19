import renderAuthenticated from './renderAuthenticated';

const defaultProps = { foo: 'bar' };
const mockedComponent = () => <div>Component</div>;
const mockedLoginMethod = jest.fn();

jest.mock('./Auth0', () => jest.fn()
  .mockImplementationOnce(() => ({
    login: () => { mockedLoginMethod(); },
    isAuthenticated: () => false
  }))
  .mockImplementationOnce(() => ({
    isAuthenticated: () => true
  }))
);

describe('renderAuthenticated', () => {
  it('should return null when user is not authenticated', () => {
    const returnedComponent = renderAuthenticated();

    expect(mockedLoginMethod).toHaveBeenCalledTimes(1);
    expect(returnedComponent).toBeNull();
  });

  it('should return a rendered component with auth props', () => {
    const returnedComponent = renderAuthenticated(mockedComponent, defaultProps);

    expect(returnedComponent.props).toBeDefined();
  });
});
