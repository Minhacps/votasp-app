import React from 'react';

import Auth0 from './Auth0';

const renderAuthenticated = (component, props) => {
  const auth = new Auth0();

  if (!auth.isAuthenticated()) {
    auth.login();
    return null;
  }

  return React.createElement(component, {
    props,
    auth
  });
};

export default renderAuthenticated;
