import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import store from './redux/store';
import Authentication from './components/Authentication/Authentication';
import Routes from './routes';

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Authentication>
              {({ isUserAuthenticated }) => isUserAuthenticated && <Routes />}
            </Authentication>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
