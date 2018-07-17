import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { VOTER, CANDIDATE } from '../../constants/userProfile';
import Loader from '../Loader/Loader';
import CompleteSignup from '../CompleteSignup/CompleteSignup';
import Header from '../Header/Header';

export const PageLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node
};

export default PageLayout;
