import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Loader from '../components/Loader/Loader';
import WelcomeMessage from '../components/WelcomeMessage/WelcomeMessage';

class Home extends PureComponent {
  render() {
    if (this.props.auth0.isLoading) {
      return <Loader />;
    }

    return <WelcomeMessage userName={this.props.auth0.userData.name} />;
  }
}

const mapStateToProps = ({ auth0 }) => ({
  auth0,
});

export default connect(mapStateToProps)(Home);
