import React, { PureComponent } from 'react';
import firebase from 'firebase/app';

import PageLayout from '../PageLayout/PageLayout';
import CompleteSignupForm from './CompleteSignupForm';

import { VOTER } from '../../constants/userRoles';

class CompleteSignup extends PureComponent {
  handleSubmit = async event => {
    event.preventDefault();

    const userData = await this.formatUserData(event.target);
    const currentUser = firebase.auth().currentUser;

    firebase
      .firestore()
      .collection('users')
      .doc(currentUser.uid)
      .set({ ...userData, email: currentUser.email });
  };

  formatUserData = async fields => {
    const { city, name } = this.props.userData || {};

    const userMetadata = {
      role: fields.role.value,
      city: city || fields.city.value,
      name: name || fields.name.value.trim(),
      createdAt: new Date().toISOString()
    };

    if (userMetadata.role === VOTER) {
      return userMetadata;
    }

    const candidateData = {
      level: fields.level.value,
      cnpj: fields.cnpj.value.trim(),
      number: fields.number.value.trim(),
      politicalParty: fields.politicalParty.value.trim(),
      description: fields.description.value.trim(),
      homologated: true,
      picture: null
    };

    await firebase
      .firestore()
      .collection('candidates_pictures')
      .where('number', '==', Number(candidateData.number))
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(function(doc) {
          candidateData.picture = doc.data().picture;
        });
      })

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
