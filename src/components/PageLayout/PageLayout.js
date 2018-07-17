import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { VOTER, CANDIDATE } from '../../constants/userProfile';
import Loader from '../Loader/Loader';
import CompleteSignup from '../CompleteSignup/CompleteSignup';
import Header from '../Header/Header';

export const RawPageLayout = ({ isLoadingUserData, userMetaData, children }) => {
  if (isLoadingUserData) {
    return <Loader />;
  }

  const isUserProfileDefined =
    userMetaData.userProfile === VOTER || userMetaData.userProfile === CANDIDATE;

  return (
    <React.Fragment>
      <Header />

      {!isUserProfileDefined && <CompleteSignup />}
      {isUserProfileDefined && children}
    </React.Fragment>
  );
};

RawPageLayout.propTypes = {
  children: PropTypes.node
};

const mapStateToProps = ({ auth0 }) => ({
  isLoadingUserData: auth0.isLoading,
  userMetaData: auth0.metaData
});

export default connect(mapStateToProps)(RawPageLayout);
