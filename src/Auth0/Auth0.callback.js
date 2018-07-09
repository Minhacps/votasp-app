import React, { PureComponent } from 'react';

import Loader from '../components/Loader/Loader';

class Callback extends PureComponent {
  componentDidMount() {
    const { location, auth } = this.props;

    if (/access_token|id_token|error/.test(location.hash)) {
      auth.handleAuthentication();
    }
  }

  render() {
    return <Loader />;
  }
}

export default Callback;
