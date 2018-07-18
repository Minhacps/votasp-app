import React, { PureComponent } from 'react';

import PageLayout from '../PageLayout/PageLayout';
import CompleteSignupForm from './CompleteSignupForm';

class CompleteSignup extends PureComponent {
  handleSubmit = event => {
    event.preventDefault();

    const userMetadata = {
      userProfile: this.state.userProfile
    };

    const candidateData = {
      candidateType: event.target.candidateType.value,
      candidateCnpj: event.target.candidateCnpj.value,
      candidateNumber: event.target.candidateNumber.value,
      politicalParty: event.target.politicalParty.value
    };
  };

  render() {
    return (
      <PageLayout>
        <CompleteSignupForm onSubmit={this.handleSubmit} />
      </PageLayout>
    )
  }
}

export default CompleteSignup;
