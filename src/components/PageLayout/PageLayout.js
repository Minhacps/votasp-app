import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';

const PageLayout = ({ children }) => (
  <React.Fragment>
    <Header />
    {children}
  </React.Fragment>
);

PageLayout.propTypes = {
  children: PropTypes.node
};

export default PageLayout;
