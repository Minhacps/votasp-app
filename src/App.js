import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import Authentication from './components/Authentication/Authentication';
import Routes from './routes';

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Authentication>
          {({ isUserAuthenticated }) => (
            <React.Fragment>{isUserAuthenticated && <Routes />}</React.Fragment>
          )}
        </Authentication>
      </Provider>
    );
  }
}

export default App;
