import React, { PureComponent } from 'react';
import firebase from 'firebase/app';

import SigninForm from './SigninForm';
import SignupForm from './SignupForm';

import Loader from '../Loader/Loader';

class Authentication extends PureComponent {
  state = {
    lookingForUser: true,
    isUserAuthenticated: false,
    shouldShowLoginPage: true
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ lookingForUser: false });

      if (!user) {
        return;
      }

      this.setState({ isUserAuthenticated: true });
    });
  };

  showLoginPage = shouldShowLoginPage => {
    this.setState({
      shouldShowLoginPage
    });
  };

  render() {
    if (this.state.lookingForUser) {
      return <Loader />;
    }

    if (!this.state.isUserAuthenticated) {
      return (
        <React.Fragment>
          {this.state.shouldShowLoginPage && <SigninForm showLoginPage={this.showLoginPage} />}
          {!this.state.shouldShowLoginPage && <SignupForm showLoginPage={this.showLoginPage} />}
        </React.Fragment>
      );
    }

    return this.props.children({ ...this.state });
  }
}

export default Authentication;
