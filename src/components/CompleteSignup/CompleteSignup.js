import React, { PureComponent } from 'react';
import firebase from 'firebase/app';

import PageLayout from '../PageLayout/PageLayout';
import CompleteSignupForm from './CompleteSignupForm';

import { VOTER, CANDIDATE } from '../../constants/userRoles';

class CompleteSignup extends PureComponent {
  handleSubmit = event => {
    event.preventDefault();

    const userData = this.formatUserData(event.target);
    const currentUser = firebase.auth().currentUser;

    firebase
      .firestore()
      .collection('users')
      .doc(currentUser.uid)
      .update({ ...userData, email: currentUser.email });
  };

  formatUserData = fields => {
    const { city, name } = this.props.userData;

    const userMetadata = {
      role: fields.role.value,
      city: city || fields.city.value,
      name: name || fields.name.value
    };

    if (userMetadata.role === VOTER) {
      return userMetadata;
    }

    const candidateData = {
      level: fields.level.value,
      cnpj: fields.cnpj.value,
      number: fields.number.value,
      politicalParty: fields.politicalParty.value
    };

    return {
      ...userMetadata,
      ...candidateData
    };
  };

  render() {
    return (
      <PageLayout>
        <CompleteSignupForm onSubmit={this.handleSubmit} userData={this.props.userData} />
      </PageLayout>
    );
  }
}

export default CompleteSignup;
