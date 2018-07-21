import React, { PureComponent } from 'react';
import firebase from 'firebase/app';

import PageLayout from '../PageLayout/PageLayout';
import CompleteSignupForm from './CompleteSignupForm';

import { VOTER, CANDIDATE } from '../../constants/userRoles';

class CompleteSignup extends PureComponent {
  handleSubmit = event => {
    event.preventDefault();

    const userData = this.formatUserData(event.target);
    const userId = firebase.auth().currentUser.uid;
    firebase
      .firestore()
      .collection('users')
      .doc(userId)
      .update(userData);
  };

  formatUserData = fields => {
    const userMetadata = {
      role: fields.role.value
    };

    if (userMetadata.role === VOTER) {
      return userMetadata;
    }

    const candidateData = {
      level: fields.level.value,
      cnpj: fields.cnpj.value,
      number: fields.number.value,
      politicalParty: fields.politicalParty.value,
      picture: fields.picture.value
    };

    return {
      ...userMetadata,
      ...candidateData
    };
  };

  render() {
    return (
      <PageLayout>
        <CompleteSignupForm onSubmit={this.handleSubmit} />
      </PageLayout>
    );
  }
}

export default CompleteSignup;
