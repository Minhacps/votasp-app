import React, { PureComponent } from 'react';

import PageLayout from '../PageLayout/PageLayout';
import CompleteSignupForm from './CompleteSignupForm';

import { VOTER } from '../../constants/userRoles';
import COLLECTIONS from '../../constants/firestoreCollections';
import { saveUser, getCandidateTseData } from './CompleteSignupService';

class CompleteSignup extends PureComponent {
  handleSubmit = async event => {
    event.preventDefault();

    const role = event.target.role.value;

    if (role === VOTER) {
      this.saveVoter(event.target);
      return;
    }

    this.saveCandidate(event.target);
  };

  formatUserData = fields => {
    const { city, name } = this.props.userData || {};

    return {
      city: city || fields.city.value,
      name: name || fields.name.value.trim()
    };
  };

  saveVoter = fields => {
    const userData = this.formatUserData(fields);
    return saveUser(COLLECTIONS.VOTERS, userData);
  };

  saveCandidate = async fields => {
    const userData = this.formatUserData(fields);

    const candidateFields = {
      level: fields.level.value,
      partyNumber: fields.partyNumber.value,
      number: fields.number.value.trim(),
      cnpj: fields.cnpj.value.trim(),
      description: fields.description.value.trim(),
      homologated: true,
      picture: null
    };

    const tseData = await getCandidateTseData(candidateFields.number);

    const allCandidateFields = {
      ...userData,
      ...candidateFields,
      ...tseData
    };

    return saveUser(COLLECTIONS.CANDIDATES, allCandidateFields);
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
