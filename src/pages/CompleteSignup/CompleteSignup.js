import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Loader from '../../components/Loader/Loader';
import PageLayout from '../../components/PageLayout/PageLayout';
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
    if (this.props.auth0.isLoading) {
      return <Loader />;
    }

    return (
      <PageLayout>
        <CompleteSignupForm onSubmit={this.handleSubmit} />
      </PageLayout>
    );
  }
}

const mapStateToProps = ({ auth0 }) => ({
  auth0
});

export default connect(mapStateToProps)(CompleteSignup);
