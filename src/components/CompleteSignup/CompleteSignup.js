import React, { PureComponent } from 'react';

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
    return <CompleteSignupForm onSubmit={this.handleSubmit} />;
  }
}

export default CompleteSignup;
