import React, { PureComponent } from 'react';
import firebase from 'firebase/app';

import SigninForm from './SigninForm';
import SignupForm from './SignupForm';
import { VOTER, CANDIDATE } from '../../constants/userRoles';
import CompleteSignup from '../CompleteSignup/CompleteSignup';

import Loader from '../Loader/Loader';

class Authentication extends PureComponent {
  state = {
    lookingForUser: true,
    isUserAuthenticated: false,
    shouldShowLoginPage: true
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.setState({ isUserAuthenticated: false, lookingForUser: false });
        return;
      }

      firebase
        .firestore()
        .collection('users')
        .doc(user.uid)
        .onSnapshot(snapshot => {
          const userData = snapshot.data();
          this.setState({ userData, isUserAuthenticated: true, lookingForUser: false });
        });
    });
  };

  showLoginPage = shouldShowLoginPage => {
    this.setState({
      shouldShowLoginPage
    });
  };

  render() {
    const { lookingForUser, isUserAuthenticated, shouldShowLoginPage, userData } = this.state;
    const isIncompleteProfile =
      userData && (userData.role === VOTER || userData.role === CANDIDATE);

    if (lookingForUser) {
      return <Loader />;
    }

    if (!isUserAuthenticated) {
      return (
        <React.Fragment>
          {shouldShowLoginPage && <SigninForm showLoginPage={this.showLoginPage} />}
          {!shouldShowLoginPage && <SignupForm showLoginPage={this.showLoginPage} />}
        </React.Fragment>
      );
    }

    if (isUserAuthenticated && !isIncompleteProfile) {
      return <CompleteSignup />;
    }

    return this.props.children({ ...this.state });
  }
}

export default Authentication;
